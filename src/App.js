/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Login from './components/Authentication/Login/login';
import Register from './components/Authentication/Register/register';
import ForgotPassword from './components/Authentication/ForgotPassword/forgot-password';
import InputOTP from './components/Authentication/InputOTP/inputOTP';
import Home from './components/Main/Home/home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});

export default App;
