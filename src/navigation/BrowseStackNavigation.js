import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Browse from '../components/Main/Browse';
import {ScreenKeys} from '../globals/constants';

const Stack = createStackNavigator();

const BrowseStackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenKeys.app.mainTab.browse} component={Browse} />
    </Stack.Navigator>
  );
};

export default BrowseStackNavigation;

const styles = StyleSheet.create({});
