import {takeLatest, all, call, put} from 'redux-saga/effects';
import CourseActions, {CourseTypes} from '../redux/courseRedux';
import * as apiCourse from '../services/courseServices';
import AppActions from '../redux/appRedux';

function* courseRootSaga() {
  yield all([
    yield takeLatest(CourseTypes.GET_TOP_SELLING_REQUEST, getTopSelling),
    yield takeLatest(CourseTypes.GET_TOP_NEW_REQUEST, getTopNew),
    yield takeLatest(
      CourseTypes.GET_RECOMMEND_COURSE_REQUEST,
      getRecommendCourse,
    ),
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
    yield takeLatest(CourseTypes.SEARCH_V2_REQUEST, searchV2),
    yield takeLatest(
      CourseTypes.GET_FAVORITE_COURSES_REQUEST,
      getFavoriteCourses,
    ),
  ]);
}

function* getTopSelling({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getTopSelling, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getTopNew({params, actionSuccess}) {
  try {
    console.log(params);
    const response = yield call(apiCourse.getTopNew, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getRecommendCourse({params, actionSuccess}) {
  try {
    console.log(params);
    const response = yield call(apiCourse.getRecommendCourse, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getTopRating({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getTopRating, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getContinueLearning({actionSuccess}) {
  try {
    const response = yield call(apiCourse.getContinueLearning);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getCoursesInFavoriteCat({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getCoursesInFavoriteCat, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getIntroPage({actionSuccess}) {
  try {
    const response = yield call(apiCourse.getIntroPage);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getCourseDetail({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.getCourseDetail, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* searchV2({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.searchV2, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getFavoriteCourses({actionSuccess}) {
  try {
    const response = yield call(apiCourse.getFavoriteCourses);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

export default courseRootSaga;
