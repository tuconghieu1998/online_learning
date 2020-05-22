import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import {MenuProvider} from 'react-native-popup-menu';

const ListCourses = (props) => {
  const {data} = props;
  return (
    <MenuProvider style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <ListCoursesItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </MenuProvider>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginLeft: 10,
    marginRight: 10,
  },
});
