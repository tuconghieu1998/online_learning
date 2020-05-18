import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BackButton, Input, HeaderText, TextButton} from '../../Common';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GREY, GREEN} from '../../../globals/config/color';

const Regiter = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <View style={styles.container}>
        <View style={styles.title}>
          <HeaderText color={GREEN}>Sign up</HeaderText>
        </View>
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
          password={true}
        />
        <Input
          leftIcon={<MaterialIcons name="lock" size={22} color={GREY} />}
          placeholder="Confirm your password"
          password={true}
        />
        <TextButton>abcd</TextButton>
      </View>
    </View>
  );
};

export default Regiter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
  },
});
