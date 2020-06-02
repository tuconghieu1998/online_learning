import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {GREY, BLACK} from '../../globals/config/color';

const ProfileManagementItem = (props) => {
  const {title, iconName} = props.item;
  return (
    <TouchableOpacity style={styles.container}>
      <SimpleLineIcons name={iconName} size={20} color={GREY} />
      <Text style={styles.text}>{title}</Text>
      <SimpleLineIcons name="arrow-right" size={12} color={GREY} />
    </TouchableOpacity>
  );
};

export default ProfileManagementItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    color: BLACK,
    marginLeft: 15,
    flex: 1,
  },
});
