import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const ForgetPassword = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo_icon.png')}
      />
      <Input
        label="Enter email to get password"
        placeholder="email@example.com"
        leftIcon={<Icon name="user" size={24} color="black" />}
      />
      <Button title="SEND EMAIL" type="solid" containerStyle={styles.button} />
      <Button
        title="BACK TO SIGN IN"
        type="outline"
        containerStyle={styles.button}
      />
    </View>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    marginBottom: 20,
  },
});
