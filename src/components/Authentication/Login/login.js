import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/logo_icon.jpg')}
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
      <Button title="SIGN IN" type="solid" containerStyle={styles.button} />
      <Button title="SIGN UP" type="outline" containerStyle={styles.button} />
      <Button title="FORGOT PASSWORD?" type="clear" />
    </View>
  );
};

export default Login;

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
    backgroundColor: 'grey',
  },
});
