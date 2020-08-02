import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Download from '../components/Main/Download';
import {ScreenKeys} from '../globals/constants';

const Stack = createStackNavigator();

const DownStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={ScreenKeys.app.mainTab.download}
        component={Download}
      />
    </Stack.Navigator>
  );
};

export default DownStackNavigation;

const styles = StyleSheet.create({});
