import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-elements';
import SubText from '../Common/sub-text';

const CourseInfo = (props) => {
  return (
    <View>
      <Text>{props.info.title}</Text>
      <SubText content={props.info.author} />
      <View style={styles.rowInfo}>
        <SubText content={props.info.level} />
        <SubText content="  ‧  " />
        <SubText content={props.info.released} />
        <SubText content="  ‧  " />
        <SubText content={props.info.duration} />
      </View>
      {props.info.countRating !== 0 && (
        <View style={styles.rowInfo}>
          <Rating
            imageSize={11}
            readonly
            startingValue={props.info.rating}
            style={styles.rating}
          />
          <SubText content={'(' + props.info.countRating + ')'} />
        </View>
      )}
    </View>
  );
};

export default CourseInfo;

const styles = StyleSheet.create({
  rowInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginRight: 5,
  },
});
