import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../components/Main/Search';
import CourseDetail from '../components/CourseDetail';

const Stack = createStackNavigator();

const DownStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchScreen" component={Search} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
};

export default DownStackNavigation;

const styles = StyleSheet.create({});
