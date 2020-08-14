import {takeLatest, all, call, put} from 'redux-saga/effects';
import {CategoryTypes} from '../redux/categoryRedux';
import AppActions from '../redux/appRedux';
import * as apiCategory from '../services/categoryServices';

function* categoryRootSaga() {
  yield all([
    yield takeLatest(CategoryTypes.GET_CATEGORIES_REQUEST, getCategories),
  ]);
}

function* getCategories({actionSuccess}) {
  try {
    const response = yield call(apiCategory.getCategories);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

export default categoryRootSaga;
