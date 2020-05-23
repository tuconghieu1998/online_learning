import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GREEN} from '../../globals/config/color';

const Button = (props) => {
  const {children, size, onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={{...styles.textButton, ...{fontSize: size}}}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: GREEN,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  textButton: {
    color: 'white',
  },
});
