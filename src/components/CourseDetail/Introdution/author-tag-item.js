import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../../Common';
import {BLACK, LIGHT_GREY} from '../../../globals/config/color';

const AuthorTagItem = (props) => {
  const {name, avatar} = props;
  return (
    <View style={styles.container}>
      <Avatar source={avatar} size={22} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default AuthorTagItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: LIGHT_GREY,
    alignItems: 'center',
    borderRadius: 11,
    padding: 2,
    marginRight: 5,
  },
  text: {
    fontSize: 14,
    color: BLACK,
    marginLeft: 5,
    marginRight: 5,
  },
});
