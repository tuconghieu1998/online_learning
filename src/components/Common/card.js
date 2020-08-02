import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import CourseInfo from './course-info';
import MenuPopup from './menuPopup';
import {LIGHT_GRAY, GREY} from '../../globals/config/color';
import {useNavigation} from '@react-navigation/native';
import {ScreenKeys} from '../../globals/constants';

const Card = (props) => {
  const {
    id,
    image,
    title,
    instructor,
    released,
    countVideo,
    duration,
    rating,
    lastLearningTime,
    price,
  } = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push(ScreenKeys.app.courseDetail)}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <CourseInfo
          info={{
            title,
            instructor,
            released,
            countVideo,
            duration,
            rating,
            lastLearningTime,
            price,
          }}
          ratingBackgroundColor={GREY}
          tintColor={LIGHT_GRAY}
        />
      </View>
      <View style={styles.menuPopupContainer}>
        <MenuPopup iconColor="white" />
      </View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 195,
    marginLeft: 15,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  infoContainer: {
    flex: 1,
    padding: 7,
    backgroundColor: LIGHT_GRAY,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    width: 200,
    height: 100,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  menuPopupContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 5,
  },
});
