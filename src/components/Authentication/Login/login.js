import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {BackButton, Input, HeaderText, TextButton, Button} from '../../Common';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN, BLACK} from '../../../globals/config/color';

const Login = () => {
  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <View style={styles.container}>
        <View style={styles.title}>
          <HeaderText color={GREEN}>Welcome back</HeaderText>
        </View>
        <View>
          <Input
            leftIcon={<MaterialIcons name="email" size={22} color={GREY} />}
            placeholder="Enter your email"
          />
          <Input
            leftIcon={<MaterialIcons name="lock" size={22} color={GREY} />}
            placeholder="Enter your password"
            password={true}
          />
          <View style={styles.forgotPass}>
            <TextButton size={16} color={BLACK}>
              Forgot password?
            </TextButton>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18}>Login</Button>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textFooter}>Don't have an account? </Text>
        <TextButton color={GREEN} size={16}>
          SIGN UP
        </TextButton>
      </View>
    </ScrollView>
  );
};

export default Login;

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
