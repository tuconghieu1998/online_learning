import {takeLatest, put, all} from 'redux-saga/effects';
import {AsyncStorage} from 'react-native';
import {setToken} from '../globals/config/axios';
import AppActions, {AppTypes} from '../redux/appRedux';

function* appRootSagas() {
  yield all([yield takeLatest(AppTypes.STARTUP_REQUEST, startupRequest)]);
}

function* startupRequest({actionSuccess, actionFailure}) {
  try {
    let user = yield AsyncStorage.getItem('user') || undefined;
    user = JSON.parse(user);
    const token = user.token;
    yield setToken(token);
    // yield put(ProfileActions.getInfoUserRequest());
    yield put(AppActions.startupSuccess());
    if (actionSuccess) {
      actionSuccess();
    }
  } catch (error) {
    yield put(AppActions.startupFailure());
    if (actionFailure) {
      actionFailure();
    }
  }
}

export default appRootSagas;
