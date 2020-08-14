import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {CourseInfo, MenuPopup, Avatar} from '../../Common';
import {GREY} from '../../../globals/config/color';
import {useNavigation} from '@react-navigation/native';
import {ScreenKeys} from '../../../globals/constants';

const ListCoursesItem = (props) => {
  const navigation = useNavigation();
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
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.push(ScreenKeys.app.courseDetail, {id})}>
      <Image style={styles.image} source={{uri: image}} />

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
          tintColor="white"
        />
      </View>
      {/* {item.author && (
        <View style={styles.menuPopUpConatainer}>
          <MenuPopup iconColor={BLACK} />
        </View>
      )} */}
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

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
  image: {
    width: 80,
    height: 50,
    marginRight: 5,
    marginTop: 4,
  },
  infoContainer: {
    flex: 1,
  },
  menuPopUpConatainer: {
    justifyContent: 'center',
  },
});
