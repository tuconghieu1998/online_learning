import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton, Input} from '../../Common';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY} from '../../../globals/config/color';

const Login = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.container}>
        <Input
          leftIcon={<Icon5 name="user-alt" size={20} color={GREY} />}
          placeholder="Enter your name"
        />
        <Input
          leftIcon={<MaterialIcons name="email" size={22} color={GREY} />}
          placeholder="Enter your email"
        />
        <Input
          leftIcon={<MaterialIcons name="lock" size={22} color={GREY} />}
          placeholder="Enter your password"
        />
        <Input
          leftIcon={<MaterialIcons name="lock" size={22} color={GREY} />}
          placeholder="Confirm your password"
        />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
