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
          <HeaderText color={GREEN}>Input OTP</HeaderText>
          <Text style={{color: BLACK}}>Enter OTP sent to your email</Text>
        </View>
        <View>
          <Input
            leftIcon={
              <MaterialIcons name="verified-user" size={22} color={GREY} />
            }
            placeholder="Enter your OTP"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18}>Verify your account</Button>
        </View>
      </View>
      <View style={styles.footer}>
        <TextButton color={GREEN} size={16}>
          Resend email
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
    marginTop: 20,
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
