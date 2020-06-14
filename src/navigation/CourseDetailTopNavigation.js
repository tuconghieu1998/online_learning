import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GREY, GREEN} from '../globals/config/color';
import Transcript from '../components/CourseDetail/Transcript/transcript';
import ListLesson from '../components/CourseDetail/ListLessons/list-lessons';

const Tab = createMaterialTopTabNavigator();

const CourseDetailTopNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: GREEN,
        inactiveTintColor: GREY,
        labelStyle: {fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: GREEN},
      }}>
      <Tab.Screen name="CONTENTS" component={ListLesson} />
      <Tab.Screen name="TRANSCRIPT" component={Transcript} />
    </Tab.Navigator>
  );
};

export default CourseDetailTopNavigation;

const styles = StyleSheet.create({
  tabBarContainer: {
    borderTopColor: GREY,
    borderTopWidth: 0.5,
  },
});
