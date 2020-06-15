import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Avatar, SubText} from '../../Common';
import {BLACK} from '../../../globals/config/color';

const ListAuthorItem = (props) => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.item}>
      <View style={styles.avatarContainer}>
        <Avatar source={item.avatar} size={50} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={{color: BLACK}}>{item.name}</Text>
        <SubText>{`${item.countCourses} Courses`}</SubText>
      </View>
    </TouchableOpacity>
  );
};

export default ListAuthorItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
