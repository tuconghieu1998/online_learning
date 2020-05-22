import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from '../../../Common';
import {BLACK} from '../../../../globals/config/color';

const ListAuthorItem = (props) => {
  const {author} = props;
  return (
    <View style={styles.container}>
      <Avatar source={author.avatar} size={80} />
      <Text style={styles.name}>{author.name}</Text>
    </View>
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
