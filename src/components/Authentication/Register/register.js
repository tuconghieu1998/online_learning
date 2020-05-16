import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Register = () => {
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo_icon.png')}
      />
      <Input
        placeholder="Username or Email"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" size={24} color="black" />}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        leftIcon={<Icon name="lock" size={24} color="black" />}
      />
      <Button title="SIGN UP" type="solid" containerStyle={styles.button} />
      <Button title="SIGN IN" type="outline" containerStyle={styles.button} />
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    padding: 20,
  },
  button: {
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'center',
    marginBottom: 10,
  },
});
