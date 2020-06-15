import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AllTab from '../components/Main/Search/all-tab';
import CoursesTab from '../components/Main/Search/courses-tab';
import PathsTab from '../components/Main/Search/paths-tab';
import AuthorsTab from '../components/Main/Search/authors-tab';
import {GREEN, GREY} from '../globals/config/color';
import {ScreenKeys} from '../globals/constants';

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
      <Tab.Screen
        name={ScreenKeys.app.searchTab.all}
        component={AllTab}
        options={{tabBarLabel: 'ALL'}}
      />
      <Tab.Screen
        name={ScreenKeys.app.searchTab.course}
        component={CoursesTab}
        options={{tabBarLabel: 'COURSES'}}
      />
      <Tab.Screen
        name={ScreenKeys.app.searchTab.path}
        component={PathsTab}
        options={{tabBarLabel: 'PATHS'}}
      />
      <Tab.Screen
        name={ScreenKeys.app.searchTab.author}
        component={AuthorsTab}
        options={{tabBarLabel: 'AUTHORS'}}
      />
    </Tab.Navigator>
  );
};

export default SearchTopNavigation;

const styles = StyleSheet.create({});
