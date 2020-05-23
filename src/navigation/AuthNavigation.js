import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../components/Authentication/Login/login';
import Register from '../components/Authentication/Register/register';
import ForgotPassword from '../components/Authentication/ForgotPassword/forgot-password';
import InputOTP from '../components/Authentication/InputOTP/inputOTP';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="InputOTP" component={InputOTP} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
