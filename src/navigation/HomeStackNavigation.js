import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../components/Main/Home';
import {ScreenKeys} from '../globals/constants';

const Stack = createStackNavigator();

const HomeStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenKeys.app.mainTab.home} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigation;

const styles = StyleSheet.create({});
