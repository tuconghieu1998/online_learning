import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LIGHT_BLACK} from '../../globals/config/color';

const NoData = (props) => {
  const {text} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: LIGHT_BLACK,
  },
});
