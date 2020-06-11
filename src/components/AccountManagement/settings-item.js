import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {GREY} from '../../globals/config/color';

const SettingsItem = (props) => {
  const {title, children} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

export default SettingsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderBottomColor: GREY,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
  },
});
