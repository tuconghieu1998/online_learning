import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListCoursesItem from '../ListCoursesItem/list-courses-item';

const DATA = [
  {
    id: '1',
    title: 'Building Applications with React and Flux',
    author: 'Cory Hourse',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    level: 'Intermediate',
    released: 'thg 8 2019',
    duration: '5h 11m',
    rating: 4.5,
    countRating: 1415,
  },
  {
    id: '2',
    title: 'React: Getting Started',
    author: 'Samer Buna',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    level: 'Beginer',
    released: 'thg 8 2019',
    duration: '4h 11m',
    rating: 3,
    countRating: 2206,
  },
  {
    id: '3',
    title: 'Sever Rendering React Components',
    author: 'Daniel Stern',
    image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
    level: 'Advanced',
    released: 'thg 8 2019',
    duration: '4h 11m',
    rating: 0,
    countRating: 0,
  },
];

const ListCourses = () => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => <ListCoursesItem item={item} />}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

export default ListCourses;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'gainsboro',
    marginLeft: 10,
    marginRight: 10,
  },
});
