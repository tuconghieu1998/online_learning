import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import SubText from '../Common/sub-text';
import {BLACK, GREY} from '../../globals/config/color';
import moment from 'moment';

const CourseInfo = (props) => {
  const {info, ratingBackgroundColor, tintColor} = props;
  return (
    <View>
      <Text numberOfLines={2} style={{color: BLACK}}>
        {info.title}
      </Text>
      {info['instructor.user.name'] && (
        <View>
          <SubText>{info['instructor.user.name']}</SubText>
          <SubText>{`${moment(info.updatedAt).format('DD/MM/YYYY')}  ‧  ${
            info.videoNumber
          } video${info.videoNumber > 1 ? 's' : ''}  ‧  ${
            info.totalHours
          } giờ`}</SubText>
          {info.countRating !== 0 && (
            <View style={styles.rowInfo}>
              <Rating
                type="custom"
                imageSize={11}
                readonly
                startingValue={info.ratedNumber}
                style={styles.rating}
                ratingBackgroundColor={ratingBackgroundColor}
                tintColor={tintColor}
              />
              {/* <SubText>{' (' + info.countRating + ')'}</SubText> */}
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
