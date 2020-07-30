import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './Others/splash-screen';
import {AuthNavigation, AppNavigation} from '../navigation';
import FlashMessage from 'react-native-flash-message';
import loGet from 'lodash/get';
import {connect} from 'react-redux';
import AppActions from '../redux/appRedux';

const MainApp = (props) => {
  const [logedIn, setLogedIn] = useState(false);
  const [loadingSplash, setLoadingSplash] = useState(true);
  const {startUp} = props;
  useEffect(() => {
    setTimeout(() => {
      setLoadingSplash(false);
    }, 2000);
    console.log('start');
    startUp();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setLogedIn(props.hasLogedInYet);
  }, [props.hasLogedInYet]);
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
  hasLogedInYet: state.app.logedIn,
});

const mapDispatchToProps = (dispatch) => ({
  startUp: (actionSuccess, actionFailure) =>
    dispatch(AppActions.startupRequest(actionSuccess, actionFailure)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);

const styles = StyleSheet.create({});
