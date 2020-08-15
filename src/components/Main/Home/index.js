import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Header} from '../../Common';
import Introduction from './introduction';
import ContinueLearning from './continue-learning';
import CoursesInFavoriteCat from './courses-in-favorite-cat';
import FavoriteCourse from './favorite-course';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title="Home" />
      <ScrollView>
        <Introduction />
        <ContinueLearning />
        <CoursesInFavoriteCat />
        <FavoriteCourse />
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
