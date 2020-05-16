import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SubText = (props) => {
  return <Text style={styles.subText}>{props.content}</Text>;
};

export default SubText;

const styles = StyleSheet.create({
  subText: {
    fontSize: 11,
    color: 'dimgrey',
  },
});
