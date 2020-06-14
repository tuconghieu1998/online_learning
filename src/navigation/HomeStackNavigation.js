import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Main/Home';
import CourseDetail from '../components/CourseDetail';
import Profile from '../components/AccountManagement/profile';
import Settings from '../components/AccountManagement/settings';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;

const styles = StyleSheet.create({});
