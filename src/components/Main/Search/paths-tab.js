import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';

const PATHS = [
  {
    id: '1',
    title: 'React',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    countCourses: 12,
  },
];

const PathsTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={PATHS}
        renderItem={({item}) => <ListCoursesItem item={item} />}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default PathsTab;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginLeft: 15,
    marginRight: 15,
  },
});
