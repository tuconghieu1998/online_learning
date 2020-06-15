import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Main/Home';
import CourseDetail from '../components/CourseDetail';
import Profile from '../components/AccountManagement/profile';
import Settings from '../components/AccountManagement/settings';
import {ScreenKeys} from '../globals/constants';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenKeys.app.mainTab.home} component={Home} />
      <Stack.Screen
        name={ScreenKeys.app.courseDetail}
        component={CourseDetail}
      />
      <Stack.Screen name={ScreenKeys.app.profile} component={Profile} />
      <Stack.Screen name={ScreenKeys.app.settings} component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;

const styles = StyleSheet.create({});
