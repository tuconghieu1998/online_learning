import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-elements';
import SubText from '../Common/sub-text';
import {BLACK, GREY} from '../../globals/config/color';

const CourseInfo = (props) => {
  const {info, ratingBackgroundColor} = props;
  return (
    <View>
      <Text style={{color: BLACK}}>{info.title}</Text>
      {info.author && (
        <View>
          <SubText>{info.author}</SubText>
          <SubText>{`${info.level}  ‧  ${info.released}  ‧  ${info.duration}`}</SubText>
          {info.countRating !== 0 && (
            <View style={styles.rowInfo}>
              <Rating
                type="custom"
                imageSize={11}
                readonly
                startingValue={info.rating}
                style={styles.rating}
                ratingBackgroundColor={GREY}
                tintColor={ratingBackgroundColor}
              />
              <SubText>{' (' + info.countRating + ')'}</SubText>
            </View>
          )}
        </View>
      )}
      {info.countCourses && <SubText>{`${info.countCourses} courses`}</SubText>}
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
