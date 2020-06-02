import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {CourseInfo, MenuPopup, Avatar} from '../../Common';
import {BLACK} from '../../../globals/config/color';

const ListCoursesItem = (props) => {
  const {item} = props;
  return (
    <TouchableOpacity style={styles.item}>
      <Image style={styles.image} source={{uri: item.image}} />

      <View style={styles.infoContainer}>
        <CourseInfo info={item} />
      </View>
      {item.author && (
        <View style={styles.menuPopUpConatainer}>
          <MenuPopup iconColor={BLACK} />
        </View>
      )}
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
