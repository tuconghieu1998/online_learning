import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Avatar} from '../../../Common';
import {BLACK} from '../../../../globals/config/color';

const ListAuthorItem = (props) => {
  const {avatar, name, onPress} = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar source={avatar} size={80} />
      <Text numberOfLines={2} style={styles.name}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default ListAuthorItem;

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    color: BLACK,
    textAlign: 'center',
    width: 80,
  },
});
