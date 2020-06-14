import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStackNavigation';
import DownloadStackNavigation from './DownloadStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import Browse from '../components/Main/Browse/browse';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREEN} from '../globals/config/color';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Download') {
            iconName = 'file-download';
          } else if (route.name === 'Browse') {
            iconName = 'grid-on';
          } else if (route.name === 'Search') {
            iconName = 'search';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: GREEN,
        inactiveTintColor: LIGHT_BLACK,
      }}
      options={({route}) => ({title: route.params.name})}>
      <Tab.Screen name="Home" component={HomeStackNavigation} />
      <Tab.Screen name="Download" component={DownloadStackNavigation} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" component={SearchStackNavigation} />
    </Tab.Navigator>
  );
};

export default AppNavigation;
