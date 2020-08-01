import {takeLatest, all, call, put} from 'redux-saga/effects';
import CourseActions, {CourseTypes} from '../redux/courseRedux';
import * as apiCourse from '../services/courseServices';
import AppActions from '../redux/appRedux';

function* courseRootSaga() {
  yield all([
    yield takeLatest(CourseTypes.GET_TOP_SELLING_REQUEST, getTopSelling),
    yield takeLatest(CourseTypes.GET_TOP_RATING_REQUEST, getTopRating),
  ]);
}

function* getTopSelling({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getTopSelling, params);
    //yield put(CourseActions.getTopSellingSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    // yield put(CourseActions.getTopSellingFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getTopRating({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getTopRating, params);
    //yield put(CourseActions.getTopRatingSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    // yield put(CourseActions.getTopRatingFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

export default courseRootSaga;
