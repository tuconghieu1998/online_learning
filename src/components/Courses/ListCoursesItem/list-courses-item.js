import React from 'react';
import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import CourseInfo from '../../Common/course-info';

const ListCoursesItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={{uri: props.item.image}} />
      <CourseInfo info={props.item} />
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  image: {
    width: 80,
    height: 50,
    marginRight: 5,
    marginTop: 4,
  },
});
