import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import ListLessonItem from '../ListLessonsItem/list-lesson-item';
import {LIGHT_GREY} from '../../../globals/config/color';

const ListLesson = (props) => {
  const {lessons} = props;
  return (
    <FlatList
      data={lessons}
      renderItem={({item, index}) => (
        <ListLessonItem item={item} index={index} />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default ListLesson;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
  },
});
