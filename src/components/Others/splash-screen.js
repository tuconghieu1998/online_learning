import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {GREY, LIGHT_BLACK} from '../../globals/config/color';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo_icon.png')}
      />
      <Text style={styles.greetings}>Bring knowledge to everyone</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  greetings: {
    fontSize: 16,
    color: LIGHT_BLACK,
  },
});
