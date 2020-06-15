import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GREY, GREEN} from '../globals/config/color';
import Transcript from '../components/CourseDetail/Transcript/transcript';
import ListLesson from '../components/CourseDetail/ListLessons/list-lessons';
import {ScreenKeys} from '../globals/constants';

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
      <Tab.Screen
        name={ScreenKeys.app.courseDetailTab.content}
        component={ListLesson}
        options={{tabBarLabel: 'CONTENTS'}}
      />
      <Tab.Screen
        name={ScreenKeys.app.courseDetailTab.transcript}
        component={Transcript}
        options={{tabBarLabel: 'TRANSCRIPT'}}
      />
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
