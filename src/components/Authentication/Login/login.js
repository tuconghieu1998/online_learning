import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {BackButton, Input, HeaderText, TextButton, Button} from '../../Common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN, BLACK} from '../../../globals/config/color';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import loGet from 'lodash/get';
import UserActions from '../../../redux/userRedux';

const initialState = {
  email: {
    value: '',
    isValid: true,
    errMessage: 'Email không đúng định dạng',
  },
  password: {
    value: '',
    isValid: true,
    errMessage: 'Mật khẩu tối thiểu 8 kí tự, bao gồm cả chữ và số',
  },
};

const Login = (props) => {
  const [data, setData] = useState(initialState);
  const navigation = useNavigation();
  //const {email = '', password = ''} = route && route.params || {};
  const handleChange = (input, name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: {...prevState[name], value: input},
    }));
  };

  const handleLogin = () => {
    const params = {
      email: data.email.value,
      password: data.password.value,
    };
    props.login(params, (response) => {
      console.log(response);
      //navigation.navigate(ScreenKeys.auth.login);
    });

    //
    //navigation.navigate('InputOTP')
  };
  // const {signIn} = React.useContext(AuthContext);
  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <View style={styles.container}>
        <View style={styles.title}>
          <HeaderText color={GREEN}>Welcome back</HeaderText>
        </View>
        <View>
          <Input
            name="email"
            data={data.email}
            leftIcon={<MaterialIcons name="email" size={22} color={GREY} />}
            placeholder="Enter your email"
            handleChange={handleChange}
          />
          <Input
            name="password"
            data={data.password}
            leftIcon={<MaterialIcons name="lock" size={22} color={GREY} />}
            placeholder="Enter your password"
            password={true}
            handleChange={handleChange}
          />
          <View style={styles.forgotPass}>
            <TextButton
              size={16}
              color={BLACK}
              onPress={() => navigation.navigate('ForgotPassword')}>
              Forgot password?
            </TextButton>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18} onPress={handleLogin}>
            Login
          </Button>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Don't have an account? </Text>
        <TextButton
          onPress={() => navigation.navigate('Register')}
          color={GREEN}
          size={16}>
          SIGN UP
        </TextButton>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  dataLogin: loGet(state, ['userInfo', 'token', 'message']),
});

const mapDispatchToProps = (dispatch) => ({
  login: (params, actionSuccess) =>
    dispatch(UserActions.loginRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
  },
  buttonContainer: {
    marginTop: 30,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  textFooter: {
    fontSize: 16,
    color: BLACK,
  },
  forgotPass: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
});
