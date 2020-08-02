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
      <View>
        <SubText>{info.instructor}</SubText>
        <SubText>{`${moment(info.released).format('DD/MM/YYYY')}  ‧  ${
          info.countVideo
        } video${info.countVideo > 1 ? 's' : ''}  ‧  ${
          info.duration
        } giờ`}</SubText>
        <View style={styles.rowInfo}>
          <Rating
            type="custom"
            imageSize={11}
            readonly
            startingValue={info.rating}
            style={styles.rating}
            ratingBackgroundColor={ratingBackgroundColor}
            tintColor={tintColor}
          />
        </View>
      </View>
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
