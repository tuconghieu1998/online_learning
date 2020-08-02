import {takeLatest, all, call, put} from 'redux-saga/effects';
import CourseActions, {CourseTypes} from '../redux/courseRedux';
import * as apiCourse from '../services/courseServices';
import AppActions from '../redux/appRedux';

function* courseRootSaga() {
  yield all([
    yield takeLatest(CourseTypes.GET_TOP_SELLING_REQUEST, getTopSelling),
    yield takeLatest(CourseTypes.GET_TOP_RATING_REQUEST, getTopRating),
    yield takeLatest(
      CourseTypes.GET_CONTINUE_LEARNING_REQUEST,
      getContinueLearning,
    ),
    yield takeLatest(
      CourseTypes.GET_COURSES_IN_FAVORITE_CAT_REQUEST,
      getCoursesInFavoriteCat,
    ),
    yield takeLatest(CourseTypes.GET_INTRO_PAGE_REQUEST, getIntroPage),
    yield takeLatest(CourseTypes.GET_COURSE_DETAIL_REQUEST, getCourseDetail),
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

function* getContinueLearning({actionSuccess}) {
  try {
    const response = yield call(apiCourse.getContinueLearning);
    //yield put(CourseActions.getTopRatingSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    // yield put(CourseActions.getTopRatingFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getCoursesInFavoriteCat({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getCoursesInFavoriteCat, params);
    //yield put(CourseActions.getTopRatingSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    // yield put(CourseActions.getTopRatingFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getIntroPage({actionSuccess}) {
  try {
    const response = yield call(apiCourse.getIntroPage);
    //yield put(CourseActions.getTopRatingSuccess(response));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    // yield put(CourseActions.getTopRatingFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getCourseDetail({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getCourseDetail, params);
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
