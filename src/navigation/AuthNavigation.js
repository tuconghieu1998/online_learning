import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Authentication/Login/login';
import Register from '../components/Authentication/Register/register';
import ForgotPassword from '../components/Authentication/ForgotPassword/forgot-password';
import InputOTP from '../components/Authentication/InputOTP/inputOTP';
import {ScreenKeys} from '../globals/constants';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenKeys.auth.login}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenKeys.auth.login} component={Login} />
      <Stack.Screen name={ScreenKeys.auth.register} component={Register} />
      <Stack.Screen
        name={ScreenKeys.auth.forgotPassword}
        component={ForgotPassword}
      />
      <Stack.Screen name={ScreenKeys.auth.inputOTP} component={InputOTP} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
