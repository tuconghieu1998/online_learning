import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {CourseInfo, MenuPopup} from '../../Common';
import {BLACK} from '../../../globals/config/color';

const ListCoursesItem = (props) => {
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={{uri: props.item.image}} />
      <View style={styles.infoContainer}>
        <CourseInfo info={props.item} />
      </View>
      <View style={styles.menuPopUpConatainer}>
        <MenuPopup iconColor={BLACK} />
      </View>
    </TouchableOpacity>
  );
};

export default ListCoursesItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 10,
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
