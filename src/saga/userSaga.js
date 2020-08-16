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
    yield takeLatest(UserTypes.GET_INFO_USER_REQUEST, getInfoUser),
    yield takeLatest(UserTypes.FORGOT_PASSWORD_REQUEST, forgotPassword),
    yield takeLatest(
      UserTypes.GET_COURSE_LIKE_STATUS_REQUEST,
      getCourseLikeStatus,
    ),
    yield takeLatest(UserTypes.LIKE_COURSE_REQUEST, likeCourse),
    yield takeLatest(UserTypes.EDIT_PROFILE_REQUEST, editProfile),
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
    yield put(AppActions.startupSuccess(token));
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.loginFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getInfoUser({actionSuccess}) {
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

function* forgotPassword({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {message} = yield call(api.forgotPassword, params);
    yield put(UserActions.forgotPasswordSuccess(message));
    if (actionSuccess) {
      actionSuccess({message});
    }
    //yield put(AppActions.hideIndicator());

    yield put(
      AppActions.showSuccess(
        'Email đã được gửi đi. Hãy kiểm tra hòm thư của bạn.',
      ),
    );
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.forgotPasswordFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getCourseLikeStatus({params, actionSuccess}) {
  try {
    const response = yield call(api.getCourseLikeStatus, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* likeCourse({params, actionSuccess}) {
  try {
    const response = yield call(api.likeCourse, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* editProfile({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const res = yield call(api.editProfile, params);
    yield put(UserActions.editProfileSuccess(res.payload));
    if (actionSuccess) {
      actionSuccess(res);
    }
    yield put(AppActions.showSuccess('Đổi thông tin cá nhân thành công'));
    //yield put(AppActions.hideIndicator());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.editProfileFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

export default userRootSagas;
