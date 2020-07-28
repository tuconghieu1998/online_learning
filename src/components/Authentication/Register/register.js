import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackButton, Input, HeaderText, TextButton, Button} from '../../Common';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN, BLACK} from '../../../globals/config/color';
import loGet from 'lodash/get';
import {connect} from 'react-redux';
import UserActions from '../../../redux/userRedux';
import {ScreenKeys} from '../../../globals/constants';

const initialState = {
  name: {
    value: '',
    isValid: true,
    errMessage: 'Tên tài khoản tối thiểu 1 kí tự',
  },
  email: {
    value: '',
    isValid: true,
    errMessage: 'Email không đúng định dạng',
  },
  phone: {
    value: '',
    isValid: true,
    errMessage: 'Số điện thoại không đúng định dạng',
  },
  password: {
    value: '',
    isValid: true,
    errMessage: 'Mật khẩu tối thiểu 8 kí tự, bao gồm cả chữ và số',
  },
  confirmPassword: {
    value: '',
    isValid: true,
    errMessage: 'Mật khẩu không khớp',
  },
};

const Regiter = (props) => {
  const [data, setData] = useState(initialState);
  const navigation = useNavigation();

  const handleChange = (input, name) => {
    // console.log(input + ',' + name);
    setData((prevState) => ({
      ...prevState,
      [name]: {...prevState[name], value: input},
    }));
  };

  const handleSignup = () => {
    if (data.password.value === data.confirmPassword.value) {
      const params = {
        name: data.name.value,
        email: data.email.value,
        phone: data.phone.value,
        password: data.password.value,
      };
      props.register(params, (reponse) => {
        console.log(reponse);
        navigation.navigate(ScreenKeys.auth.login);
      });
    }
    //
    //navigation.navigate('InputOTP')
  };

  return (
    <ScrollView style={styles.container}>
      <BackButton onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.title}>
          <HeaderText color={GREEN}>Sign up</HeaderText>
        </View>
        <View>
          <Input
            data={data.name}
            name="name"
            autoFocus={true}
            leftIcon={<Icon5 name="user-alt" size={20} color={GREY} />}
            placeholder="Enter your name"
            handleChange={handleChange}
          />
          <Input
            data={data.email}
            name="email"
            leftIcon={<MaterialIcons name="email" size={22} color={GREY} />}
            placeholder="Enter your email"
            handleChange={handleChange}
          />
          <Input
            name="phone"
            data={data.phone}
            leftIcon={<MaterialIcons name="phone" size={22} color={GREY} />}
            placeholder="Enter your phone"
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
          <Input
            name="confirmPassword"
            data={data.confirmPassword}
            leftIcon={<MaterialIcons name="lock" size={22} color={GREY} />}
            placeholder="Confirm your password"
            password={true}
            handleChange={handleChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18} onPress={handleSignup}>
            Sign up
          </Button>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Already have account? </Text>
        <TextButton
          color={GREEN}
          size={16}
          onPress={() => navigation.navigate('Login')}>
          LOGIN
        </TextButton>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  message: loGet(state, ['user', 'message'], undefined),
});

const mapDispatchToProps = (dispatch) => ({
  register: (params, actionSuccess) =>
    dispatch(UserActions.registerRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Regiter);

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
});
