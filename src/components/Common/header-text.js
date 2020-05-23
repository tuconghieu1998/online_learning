import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderText = (props) => {
  const {children, color} = props;
  return <Text style={{...styles.text, ...{color: color}}}>{children}</Text>;
};

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
