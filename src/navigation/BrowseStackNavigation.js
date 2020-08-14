import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Browse from '../components/Main/Browse';
import {ScreenKeys} from '../globals/constants';
import NewCourse from '../components/Main/Browse/New/new-course';

const Stack = createStackNavigator();

const BrowseStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenKeys.app.mainTab.browse} component={Browse} />
      <Stack.Screen name={ScreenKeys.app.newCourse} component={NewCourse} />
    </Stack.Navigator>
  );
};

export default BrowseStackNavigation;

const styles = StyleSheet.create({});
