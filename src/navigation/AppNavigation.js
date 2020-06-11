import React from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../components/Main/Home/home';
import Download from '../components/Main/Download/download';
import Browse from '../components/Main/Browse/browse';
import Search from '../components/Main/Search/search';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {LIGHT_BLACK, GREEN, BLACK} from '../globals/config/color';
import {createStackNavigator} from '@react-navigation/stack';
import {Avatar} from '../components/Common';

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
          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: GREEN,
        inactiveTintColor: LIGHT_BLACK,
      }}
      options={({route}) => ({title: route.params.name})}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Download" component={Download} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
};

// function getHeaderTitle(route) {
//   const routeName = route.state
//     ? route.state.routes[route.state.index].name
//     : route.params?.screen || 'Home';

//   switch (routeName) {
//     case 'Home':
//       return 'Home';
//     case 'Download':
//       return 'Downloads';
//     case 'Browse':
//       return 'Browse';
//     case 'Search':
//       return 'Search';
//   }
// }

// const AppNavigation = ({route, navigation}) => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTintColor: BLACK,
//       }}
//       headerStyle={{height: 80}}>
//       <Stack.Screen
//         name="mainApp"
//         component={TabNavigation}
//         options={({route}) => ({
//           headerTitle: getHeaderTitle(route),
//           headerRight: () => (
//             <View style={styles.headerRightContainer}>
//               <TouchableOpacity style={styles.headerButton}>
//                 <Avatar
//                   source="https://pluralsight.imgix.net/author/lg/4f7a6642-77f2-418d-b361-5f4a6b2c1a2c.jpg"
//                   size={24}
//                 />
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.headerButton}>
//                 <MaterialIcons name="settings" size={24} color={BLACK} />
//               </TouchableOpacity>
//             </View>
//           ),
//         })}
//       />
//     </Stack.Navigator>
//   );
// };

export default AppNavigation;

const styles = StyleSheet.create({
  headerRightContainer: {
    flexDirection: 'row',
    paddingRight: 15,
  },
  headerButton: {
    marginLeft: 10,
  },
});
