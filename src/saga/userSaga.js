import {takeLatest, all, call, put} from 'redux-saga/effects';
import UserActions, {UserTypes} from '../redux/userRedux';
import AppActions from '../redux/appRedux';
import * as api from '../services/userServices';
import {AsyncStorage} from 'react-native';
import {setToken} from '../globals/config/axios';

function* userRootSagas() {
  yield all([
    yield takeLatest(UserTypes.REGISTER_REQUEST, register),
    yield takeLatest(UserTypes.LOGIN_REQUEST, login),
    yield takeLatest(UserTypes.LOGOUT, logout),
    yield takeLatest(UserTypes.GET_INFO_USER_REQUEST, getInfoUserRequest),
  ]);
}

function* register({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {message} = yield call(api.register, params);
    yield put(UserActions.registerSuccess(message));
    if (actionSuccess) {
      actionSuccess({message});
    }
    //yield put(AppActions.hideIndicator());

    yield put(
      AppActions.showSuccess(
        'Đăng ký thành công. Hãy kiểm tra email để xác thực tài khoản',
      ),
    );
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.registerFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* login({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {message, userInfo, token} = yield call(api.login, params);
    yield put(UserActions.loginSuccess(userInfo, token, message));
    if (actionSuccess) {
      actionSuccess({userInfo, token, message});
    }
    yield AsyncStorage.setItem('user', JSON.stringify({token}));
    if (actionSuccess) {
      actionSuccess({token});
    }
    setToken(token);
    // yield put(AppActions.hideIndicator());
    yield put(AppActions.showSuccess('Đăng nhập thành công'));
    yield put(AppActions.startupSuccess());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.loginFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getInfoUserRequest({actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {payload, message} = yield call(api.getInfoUser);
    yield put(UserActions.getInfoUserSuccess(payload, message));
    if (actionSuccess) {
      actionSuccess({payload, message});
    }
    //yield put(AppActions.hideIndicator());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.getInfoUserFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* logout({actionSuccess}) {
  try {
    yield AsyncStorage.removeItem('user');
    yield put(AppActions.startupFailure());
    if (actionSuccess) {
      actionSuccess();
    }
    // yield put(AppActions.showSuccess('Đăng xuất thành công.'));
  } catch (error) {}
}

export default userRootSagas;
