import {takeLatest, all, call, put} from 'redux-saga/effects';
import UserActions, {UserTypes} from '../redux/userRedux';
import * as api from '../services/userServices';

function* userRootSagas() {
  yield all([yield takeLatest(UserTypes.REGISTER_REQUEST, register)]);
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
    //yield put(AppActions.showSuccess('Đăng ký thành công'));
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(UserActions.registerFailure(error));
    //yield put(AppActions.showError(error.message));
  }
}

export default userRootSagas;
