import {takeLatest, all, call, put} from 'redux-saga/effects';
import UserActions, {UserTypes} from '../redux/userRedux';
import AppActions from '../redux/appRedux';
import * as api from '../services/userServices';

function* userRootSagas() {
  yield all([yield takeLatest(UserTypes.REGISTER_REQUEST, register)]);
  yield all([yield takeLatest(UserTypes.LOGIN_REQUEST, login)]);
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
    console.log(JSON.stringify(error));
    yield put(UserActions.registerFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* login({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {message, userInfo, token} = yield call(api.login, params);
    console.log(message + ',' + userInfo + ',' + token);
    yield put(UserActions.loginSuccess(userInfo, token, message));
    if (actionSuccess) {
      actionSuccess({userInfo, token, message});
    }
    //yield put(AppActions.hideIndicator());
    yield put(AppActions.showSuccess('Đăng nhập thành công.'));
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    console.log(JSON.stringify(error));
    yield put(UserActions.loginFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

export default userRootSagas;
