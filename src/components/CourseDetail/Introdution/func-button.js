import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {LIGHT_GREY, BLACK} from '../../../globals/config/color';

const FuncButton = (props) => {
  const {name, icon, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default FuncButton;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'grey',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: LIGHT_GREY,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  text: {
    color: BLACK,
    fontSize: 12,
    padding: 5,
  },
});
