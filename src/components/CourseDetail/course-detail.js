import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import Introdution from './Introdution/introdution';
import ListLessons from './ListLessons/list-lessons';

const COURSE = {
  id: '1',
  title: 'React: Getting Started',
  authors: [
    {
      id: '1',
      name: 'Samer Buna',
      avatar:
        'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    },
    {
      id: '2',
      name: 'Joe Eames',
      avatar:
        'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    },
    {
      id: '3',
      name: 'Jim Cooper',
      avatar:
        'https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg',
    },
  ],
  level: 'Beginer',
  released: 'thg 4 20 2020',
  duration: 4.9,
  rating: 4.5,
  countRating: 2229,
  summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim
  suscipit ipsa impedit laboriosam saepe, sapiente excepturi molestiae
  laudantium, non tempora cumque, quam assumenda deserunt? Similique
  eaque voluptas itaque corporis. Lorem ipsum dolor sit amet consectetur
  adipisicing elit. Sequi unde iusto vel facere quibusdam nisi placeat,
  debitis veritatis autem deserunt at voluptas nam ut mollitia qui fugit
  minus minima quod.`,
  lessons: [
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
  ],
};

const CourseDetail = () => {
  const INTRO_DATA = {
    title: COURSE.title,
    authors: COURSE.authors,
    level: COURSE.level,
    duration: COURSE.duration,
    released: COURSE.released,
    rating: COURSE.rating,
    countRating: COURSE.countRating,
  };
  return (
    <View style={{flex: 1}}>
      <VideoPlayer />
      <ScrollView>
        <Introdution data={INTRO_DATA} />
        <ListLessons lessons={COURSE.lessons} />
      </ScrollView>
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({});
