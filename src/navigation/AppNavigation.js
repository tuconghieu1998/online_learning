import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackNavigation from './HomeStackNavigation';
import DownloadStackNavigation from './DownloadStackNavigation';
import BrowseStackNavigation from './BrowseStackNavigation';
import SearchStackNavigation from './SearchStackNavigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREEN} from '../globals/config/color';
import {ScreenKeys} from '../globals/constants';
import UserActions from '../redux/userRedux';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import CourseDetail from '../components/CourseDetail';
import Profile from '../components/AccountManagement/profile';
import Settings from '../components/AccountManagement/settings';
import ProfileEdit from '../components/AccountManagement/profile-edit';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = (props) => {
  useEffect(() => {
    props.getInfoUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Stack.Navigator
      // mode="modal"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={BottomTabNavigation} name="Main" />
      <Stack.Screen
        component={CourseDetail}
        name={ScreenKeys.app.courseDetail}
      />
      <Stack.Screen name={ScreenKeys.app.profile} component={Profile} />
      <Stack.Screen name={ScreenKeys.app.profileEdit} component={ProfileEdit} />
      <Stack.Screen name={ScreenKeys.app.settings} component={Settings} />
    </Stack.Navigator>
  );
};

const BottomTabNavigation = (props) => {
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
        keyboardHidesTabBar: true,
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
        component={BrowseStackNavigation}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getInfoUser: (actionSuccess) =>
    dispatch(UserActions.getInfoUserRequest(actionSuccess)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
