import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';

const ListCourses = (props) => {
  const {data} = props;
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => <ListCoursesItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginLeft: 10,
    marginRight: 10,
  },
});
