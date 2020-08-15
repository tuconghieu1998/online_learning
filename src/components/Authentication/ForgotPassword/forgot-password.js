import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {BackButton, Input, HeaderText, Button} from '../../Common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN, BLACK} from '../../../globals/config/color';
import loGet from 'lodash/get';
import {connect} from 'react-redux';
import UserActions from '../../../redux/userRedux';
import {ScreenKeys} from '../../../globals/constants';
import {EMAIL} from '../../../globals/config/regex';
import {handleValidate} from '../../../globals/helper';

const initialState = {
  email: {
    value: '',
    isValid: true,
    errMessage: 'Email không đúng định dạng',
  },
};

const ForgotPassword = (props) => {
  const [data, setData] = useState(initialState);
  const navigation = useNavigation();

  const handleChange = (input, name) => {
    setData((prevState) => ({
      ...prevState,
      [name]: {...prevState[name], value: input},
    }));
  };

  const handleForgotPassword = () => {
    const isValidEmail = handleValidate(data.email.value, EMAIL);
    setData((prevState) => ({
      ...prevState,
      email: {...prevState.email, isValid: isValidEmail},
    }));
    if (isValidEmail) {
      const params = {
        email: data.email.value,
      };
      props.forgotPassword(params, (res) => {
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
          <HeaderText color={GREEN}>Forgot your password?</HeaderText>
          <Text style={{color: BLACK}}>
            Enter your email to find your account
          </Text>
        </View>
        <View>
          <Input
            data={data.email}
            name="email"
            leftIcon={<MaterialIcons name="email" size={22} color={GREY} />}
            placeholder="xyz@example.com"
            handleChange={handleChange}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18} onPress={handleForgotPassword}>
            Send email
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  forgotPassword: (params, actionSuccess) =>
    dispatch(UserActions.forgotPasswordRequest(params, actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);

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
});
