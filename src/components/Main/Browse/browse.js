import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ImageButton, Header} from '../../Common';
import ListSkills from './TagSkill/list-skills';
import SectionListHorizontal from '../../Main/Home/section-list-horizontal';
import ListAuthors from './Author/list-authors';
import {floor} from 'react-native-reanimated';

const SKILLS = [
  {
    id: '1',
    name: 'Angular',
  },
  {
    id: '2',
    name: 'JavaScript',
  },
  {
    id: '3',
    name: 'C#',
  },
  {
    id: '4',
    name: 'Java',
  },
  {
    id: '5',
    name: 'Data Analysis',
  },
  {
    id: '6',
    name: 'ASP.NET',
  },
  {
    id: '7',
    name: 'Node.js',
  },
  {
    id: '8',
    name: 'Design Patterns',
  },
  {
    id: '9',
    name: 'Python',
  },
  {
    id: '10',
    name: 'React',
  },
];

const PATH = [
  {
    title: 'Paths',
    data: [
      [
        {
          id: '1',
          title: 'React',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
        {
          id: '2',
          title: 'Security in Google Cloud',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
        {
          id: '3',
          title: 'React',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
        {
          id: '4',
          title: 'Security in Google Cloud',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
        {
          id: '5',
          title: 'React',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
        {
          id: '6',
          title: 'Security in Google Cloud',
          image: 'https://miro.medium.com/max/750/1*41E7KLIvzPvisZY_s4XR0A.png',
          countCourses: 12,
        },
      ],
    ],
  },
];

const AUTHORS = [
  {
    id: '1',
    name: 'Dr. Sunny Wear',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
  },
  {
    id: '2',
    name: 'Chris Ward',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
  },
  {
    id: '3',
    name: 'Michael Teske',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
  },
  {
    id: '4',
    name: 'Jim Cooper',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
  },
  {
    id: '5',
    name: 'Nick Russo',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
  },
  {
    id: '6',
    name: 'Daniel Krzyczkowski',
    avatar:
      'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
  },
];

const Browse = () => {
  return (
    <View style={styles.container}>
      <Header title="Browse" />
      <ScrollView>
        <View style={styles.imagesContainer}>
          <ImageButton height={80} textAbove="NEW" textBelow="RELEASES" />
          <ImageButton
            height={80}
            textAbove="RECOMMENDED"
            textBelow="FOR YOU"
          />
        </View>
        <ListSkills title="Popular Skills" skills={SKILLS} />
        <SectionListHorizontal data={PATH} />
        <ListAuthors title="Top authors" authors={AUTHORS} />
      </ScrollView>
    </View>
  );
};

export default Browse;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imagesContainer: {
    marginTop: 10,
  },
});
