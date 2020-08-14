import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {BLACK} from '../../globals/config/color';

const BackButton = (props) => {
  const {onPress, color = BLACK} = props;
  return (
    <TouchableOpacity style={styles.touchContainer} onPress={onPress}>
      <MaterialIcons name="arrow-back" size={27} color={color} />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  touchContainer: {
    height: 30,
    width: 30,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
