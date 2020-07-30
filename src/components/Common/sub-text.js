import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {LIGHT_BLACK} from '../../globals/config/color';

const SubText = (props) => {
  const {children} = props;
  return <Text style={styles.subText}>{children}</Text>;
};

export default SubText;

const styles = StyleSheet.create({
  subText: {
    fontSize: 11,
    color: LIGHT_BLACK,
    marginBottom: 2,
  },
});
