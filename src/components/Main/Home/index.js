import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import SectionListHorizontal from './section-list-horizontal';
import {Header} from '../../Common';
import Introduction from './introduction';
import ContinueLearning from './continue-learning';
import CoursesInFavoriteCat from './courses-in-favorite-cat';

const DATA = [
  {
    title: 'Software development',
    data: [
      [
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
    ],
  },
  {
    title: 'IT operations',
    data: [
      [
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
    ],
  },
  {
    title: 'Data professional',
    data: [
      [
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
    ],
  },
  {
    title: 'Security professional',
    data: [
      [
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
    ],
  },
  {
    title: 'My paths',
    data: [
      [
        {
          id: '1',
          title: 'React',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
      ],
    ],
  },
  {
    title: 'My channels',
    data: [
      [
        {
          id: '1',
          title: 'Hieu',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
        },
      ],
    ],
  },
  {
    title: 'Bookmarks',
    data: [
      [
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
    ],
  },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Introduction />
        <ContinueLearning />
        <CoursesInFavoriteCat />
        {/* <SectionListHorizontal data={DATA} /> */}
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
