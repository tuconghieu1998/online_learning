import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import VideoPlayer from './VideoPlayer/VideoPlayer';

const CourseDetail = () => {
  return (
    <View style={{flex: 1}}>
      <VideoPlayer />
    </View>
  );
};

export default CourseDetail;

const styles = StyleSheet.create({});
