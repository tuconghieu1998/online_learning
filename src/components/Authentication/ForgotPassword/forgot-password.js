import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {BackButton, Input, HeaderText, TextButton, Button} from '../../Common';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN, BLACK} from '../../../globals/config/color';

const ForgotPassword = () => {
  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <View style={styles.container}>
        <View style={styles.title}>
          <HeaderText color={GREEN}>Forgot your password?</HeaderText>
          <Text style={{color: BLACK}}>
            Enter your email to find your account
          </Text>
        </View>
        <View>
          <Input
            leftIcon={<MaterialIcons name="email" size={22} color={GREY} />}
            placeholder="xyz@example.com"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button size={18}>Send email</Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ForgotPassword;

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
