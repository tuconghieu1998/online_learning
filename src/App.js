/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigation, AuthNavigation} from './navigation/index';
import AsyncStorage from '@react-native-community/async-storage';
import SplashScreen from './components/Others/splash-screen';

export const AuthContext = React.createContext();

const App = ({navigation}) => {
  const [splash, setSplash] = useState(true);
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
    //splash
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  // if (state.isLoading) {
  //   return <SplashScreen />;
  // }
  return (
    <MenuProvider style={styles.container}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {splash ? (
            <SplashScreen />
          ) : state.userToken == null ? (
            <AuthNavigation />
          ) : (
            <AppNavigation />
          )}
        </NavigationContainer>
      </AuthContext.Provider>
      {/* <Search /> */}
      {/* <Profile /> */}
      {/* <CourseDetail /> */}
      {/* <SplashScreen /> */}
      {/* <Settings /> */}
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
