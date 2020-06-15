import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStackNavigation';
import DownloadStackNavigation from './DownloadStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import Browse from '../components/Main/Browse/browse';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREEN} from '../globals/config/color';
import {ScreenKeys} from '../globals/constants';

const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === ScreenKeys.app.mainTab.home) {
            iconName = 'home';
          } else if (route.name === ScreenKeys.app.mainTab.download) {
            iconName = 'file-download';
          } else if (route.name === ScreenKeys.app.mainTab.browse) {
            iconName = 'grid-on';
          } else if (route.name === ScreenKeys.app.mainTab.search) {
            iconName = 'search';
          }
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: GREEN,
        inactiveTintColor: LIGHT_BLACK,
      }}>
      <Tab.Screen
        name={ScreenKeys.app.mainTab.home}
        component={HomeStackNavigation}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name={ScreenKeys.app.mainTab.download}
        component={DownloadStackNavigation}
        options={{
          tabBarLabel: 'Downloads',
        }}
      />
      <Tab.Screen
        name={ScreenKeys.app.mainTab.browse}
        component={Browse}
        options={{
          tabBarLabel: 'Browse',
        }}
      />
      <Tab.Screen
        name={ScreenKeys.app.mainTab.search}
        component={SearchStackNavigation}
        options={{
          tabBarLabel: 'Search',
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
