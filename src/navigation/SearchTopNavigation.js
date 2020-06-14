import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTab from '../components/Main/Search/all-tab';
import CoursesTab from '../components/Main/Search/courses-tab';
import PathsTab from '../components/Main/Search/paths-tab';
import AuthorsTab from '../components/Main/Search/authors-tab';
import {GREEN, GREY} from '../globals/config/color';

const Tab = createMaterialTopTabNavigator();

const SearchTopNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: GREEN,
        inactiveTintColor: GREY,
        labelStyle: {fontWeight: 'bold'},
        indicatorStyle: {backgroundColor: GREEN},
      }}>
      <Tab.Screen name="ALL" component={AllTab} />
      <Tab.Screen name="COURSES" component={CoursesTab} />
      <Tab.Screen name="PATHS" component={PathsTab} />
      <Tab.Screen name="AUTHORS" component={AuthorsTab} />
    </Tab.Navigator>
  );
};

export default SearchTopNavigation;

const styles = StyleSheet.create({});
