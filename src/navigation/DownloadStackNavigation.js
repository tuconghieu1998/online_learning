import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Download from '../components/Main/Download';
import CourseDetail from '../components/CourseDetail';
import Profile from '../components/AccountManagement/profile';
import Settings from '../components/AccountManagement/settings';

const Stack = createStackNavigator();

const DownStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="DownloadScreen" component={Download} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default DownStackNavigation;

const styles = StyleSheet.create({});
