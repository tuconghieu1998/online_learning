import React from 'react';
import {StyleSheet, Text, View, SectionList} from 'react-native';
import {TitleSectionList} from '../../Common';
import ListCoursesItem from '../../Courses/ListCoursesItem/list-courses-item';
import {LIGHT_GREY} from '../../../globals/config/color';
import ListAuthorItem from './list-author-item';

const RESULTS = [
  {
    title: 'Courses',
    data: [
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
      {
        id: '4',
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
        id: '5',
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
        id: '6',
        title: 'Sever Rendering React Components',
        author: 'Daniel Stern',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        level: 'Advanced',
        released: 'thg 8 2019',
        duration: '4h 11m',
        rating: 0,
        countRating: 0,
      },
    ],
  },
  {
    title: 'My paths',
    data: [
      {
        id: '1',
        title: 'React',
        image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        countCourses: 12,
      },
    ],
  },
  {
    title: 'Authors',
    data: [
      {
        id: '1',
        name: 'Dr. Sunny Wear',
        avatar:
          'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
        countCourses: 8,
      },
      {
        id: '2',
        name: 'Chris Ward',
        avatar:
          'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
        countCourses: 11,
      },
      {
        id: '3',
        name: 'Michael Teske',
        avatar:
          'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
        countCourses: 7,
      },
      {
        id: '4',
        name: 'Jim Cooper',
        avatar:
          'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',

        countCourses: 5,
      },
      {
        id: '5',
        name: 'Nick Russo',
        avatar:
          'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
        countCourses: 12,
      },
      {
        id: '6',
        name: 'Daniel Krzyczkowski',
        avatar:
          'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',

        countCourses: 11,
      },
    ],
  },
];

const AllTab = (props) => {
  const {data} = props;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <SectionList
        sections={RESULTS}
        renderSectionHeader={({section}) => (
          <View style={styles.headerContainer}>
            <TitleSectionList title={section.title} textExpand="See all" />
          </View>
        )}
        renderItem={({item}) =>
          item.avatar ? (
            <ListAuthorItem item={item} />
          ) : (
            <ListCoursesItem item={item} />
          )
        }
        keyExtractor={(item, index) => item + index}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

export default AllTab;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: LIGHT_GREY,
    marginLeft: 15,
    marginRight: 15,
  },
  headerContainer: {
    marginTop: 10,
    marginBottom: 5,
  },
});