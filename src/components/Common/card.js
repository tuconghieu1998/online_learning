import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import CourseInfo from './course-info';

const Card = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{uri: props.data.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <CourseInfo info={props.data} />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 195,
    marginLeft: 10,
  },
  infoContainer: {
    padding: 7,
  },
  image: {
    width: 200,
    height: 100,
  },
});
