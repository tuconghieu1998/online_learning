import React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {CourseInfo, MenuPopup} from '../Common';
import {LIGHT_GRAY, GREY} from '../../globals/config/color';
import {useNavigation} from '@react-navigation/native';

const Card = (props) => {
  const {data} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.push('CourseDetail')}>
      <Image source={{uri: data.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        <CourseInfo
          info={data}
          ratingBackgroundColor={GREY}
          tintColor={LIGHT_GRAY}
        />
      </View>
      {data.author && (
        <View style={styles.menuPopupContainer}>
          <MenuPopup iconColor="white" />
        </View>
      )}
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
    padding: 10,
  },
});
