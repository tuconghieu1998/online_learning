import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import ListLessonItem from '../ListLessonsItem/list-lesson-item';
import {LIGHT_GREY} from '../../../globals/config/color';

const LESSONS = [
  {
    id: '1',
    title: 'Course Overview',
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 1980,
    active: true,
  },
  {
    id: '2',
    title: 'The Basics',
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 2550,
    active: true,
  },
  {
    id: '3',
    title: 'Modern JavaScript Crash Courseabcd',
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 1202,
    active: false,
  },
  {
    id: '4',
    title: 'The GitHub Cards App',
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 2412,
    active: false,
  },
  {
    id: '5',
    title: 'The Star Match Game',
    source:
      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: 2610,
    active: false,
  },
];

const ListLesson = (props) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={LESSONS}
        renderItem={({item, index}) => (
          <ListLessonItem item={item} index={index} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default ListLesson;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
  },
});
