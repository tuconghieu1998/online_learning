import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Search from '../components/Main/Search';
import {ScreenKeys} from '../globals/constants';

const Stack = createStackNavigator();

const DownStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenKeys.app.mainTab.search} component={Search} />
    </Stack.Navigator>
  );
};

export default DownStackNavigation;

const styles = StyleSheet.create({});
