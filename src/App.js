/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet} from 'react-native';
import {MenuProvider} from 'react-native-popup-menu';

import createStore from './redux/';
import {Provider} from 'react-redux';
import MainApp from './components/MainApp';
const {store} = createStore();

export const AuthContext = React.createContext();

const App = ({navigation}) => {
  return (
    <Provider store={store}>
      <MenuProvider style={styles.container}>
        <MainApp />
      </MenuProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
