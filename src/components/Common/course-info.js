import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import SubText from './sub-text';
import {BLACK} from '../../globals/config/color';
import moment from 'moment/min/moment-with-locales';
import {formatPrice} from '../../globals/helper';

const CourseInfo = (props) => {
  const {info, ratingBackgroundColor, tintColor} = props;
  moment.locale('vi');
  return (
    <View>
      <Text numberOfLines={2} style={{color: BLACK}}>
        {info.title}
      </Text>
      <View>
        <SubText>{info.instructor}</SubText>
        {info.released && (
          <SubText>{`${moment(info.released).format('DD/MM/YYYY')}  ‧  ${
            info.countVideo
          } video${info.countVideo > 1 ? 's' : ''}  ‧  ${
            info.duration
          } giờ`}</SubText>
        )}
        {info.lastLearningTime && (
          <SubText>{`Lần học: ${moment(info.lastLearningTime)
            .startOf('second')
            .fromNow()}  ‧  ${info.countVideo} video${
            info.countVideo > 1 ? 's' : ''
          }`}</SubText>
        )}
        <View style={styles.rowInfo}>
          {info.rating && (
            <Rating
              type="custom"
              imageSize={11}
              readonly
              startingValue={info.rating}
              style={styles.rating}
              ratingBackgroundColor={ratingBackgroundColor}
              tintColor={tintColor}
            />
          )}
          <View>
            {info.price !== undefined && (
              <Text style={styles.price}>
                {info.price === 0
                  ? 'Miễn phí'
                  : `${formatPrice(info.price)} VND`}
              </Text>
            )}
          </View>
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
  price: {
    fontSize: 11,
    color: BLACK,
  },
});
