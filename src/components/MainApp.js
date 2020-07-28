import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Others/splash-screen';
import {AuthNavigation, AppNavigation} from '../navigation';
import FlashMessage from 'react-native-flash-message';
import loGet from 'lodash/get';
import {connect} from 'react-redux';

const MainApp = (props) => {
  const {logedIn} = props;
  const [loadingSplash, setLoadingSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoadingSplash(false);
    }, 2000);
  }, []);
  return (
    <>
      {loadingSplash ? (
        <SplashScreen />
      ) : (
        <View style={{flex: 1}}>
          <NavigationContainer>
            {logedIn ? <AppNavigation /> : <AuthNavigation />}
          </NavigationContainer>
          <FlashMessage position="top" />
        </View>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  // isRequesting: loGet(state, ['app', 'isShowingIndicator'], false),
  logedIn: loGet(state, ['app', 'logedIn'], undefined),
});

export default connect(mapStateToProps)(MainApp);

const styles = StyleSheet.create({});
