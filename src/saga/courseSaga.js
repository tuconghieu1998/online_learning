import {takeLatest, all, call, put, takeEvery} from 'redux-saga/effects';
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
    yield takeEvery(CourseTypes.SEARCH_V2_REQUEST, searchV2),
    yield takeLatest(
      CourseTypes.GET_FAVORITE_COURSES_REQUEST,
      getFavoriteCourses,
    ),
    yield takeLatest(CourseTypes.GET_HISTORIES_REQUEST, getHistories),
    yield takeLatest(CourseTypes.DELETE_HISTORIES_REQUEST, deleteHistories),
    yield takeLatest(CourseTypes.CHECK_OWN_COURSE_REQUEST, checkOwnCourse),
    yield takeLatest(CourseTypes.GET_URL_VIDEO_REQUEST, getUrlVideo),
    yield takeLatest(
      CourseTypes.UPDATE_CURRENT_TIME_LEARN_VIDEO_REQUEST,
      updateCurrentTimeLearnVideo,
    ),
    yield takeLatest(
      CourseTypes.GET_LAST_WATCHED_LESSON_REQUEST,
      getLastWatchedLesson,
    ),
    yield takeLatest(
      CourseTypes.REGISTER_FREE_COURSE_REQUEST,
      registerFreeCourse,
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
    yield put(CourseActions.getCourseDetailSuccess(response.payload));
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(CourseActions.getCourseDetailFailure(error));
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

function* getHistories({actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {
      payload: {data: histories},
    } = yield call(apiCourse.getHistories);
    yield put(CourseActions.getHistoriesSuccess(histories));
    if (actionSuccess) {
      actionSuccess({histories});
    }
    //yield put(AppActions.hideIndicator());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(CourseActions.getHistoriesFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* deleteHistories({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.deleteHistories, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* checkOwnCourse({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const {payload} = yield call(apiCourse.checkOwnCourse, params);
    yield put(CourseActions.checkOwnCourseSuccess(payload.isUserOwnCourse));
    if (actionSuccess) {
      actionSuccess({payload});
    }
    //yield put(AppActions.hideIndicator());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(CourseActions.checkOwnCourseFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* getUrlVideo({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const res = yield call(apiCourse.getUrlVideo, params);
    yield put(
      CourseActions.getUrlVideoSuccess(
        res.payload.videoUrl,
        res.payload.currentTime,
        params.lessonId,
      ),
    );
    if (actionSuccess) {
      actionSuccess(res);
    }
    //yield put(AppActions.hideIndicator());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(CourseActions.getUrlVideoFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* updateCurrentTimeLearnVideo({params, actionSuccess}) {
  try {
    const response = yield call(apiCourse.updateCurrentTimeLearnVideo, params);
    if (actionSuccess) {
      actionSuccess(response);
    }
  } catch (error) {
    yield put(AppActions.showError(error.message));
  }
}

function* getLastWatchedLesson({params, actionSuccess}) {
  try {
    const res = yield call(apiCourse.getLastWatchedLesson, params);
    yield put(
      CourseActions.getUrlVideoSuccess(
        res.payload.videoUrl,
        res.payload.currentTime,
        res.payload.lessonId,
      ),
    );
    if (actionSuccess) {
      actionSuccess(res);
    }
  } catch (error) {
    yield put(CourseActions.getLastWatchedLessonFailure(error));
    yield put(AppActions.showError(error.message));
  }
}

function* registerFreeCourse({params, actionSuccess}) {
  //yield put (AppActions.showIndicator());
  try {
    const res = yield call(apiCourse.registerFreeCourse, params);
    yield put(CourseActions.registerFreeCourseSuccess(true));
    if (actionSuccess) {
      actionSuccess(res);
    }
    //yield put(AppActions.hideIndicator());
  } catch (error) {
    //yield put(AppActions.hideIndicator());
    yield put(CourseActions.registerFreeCourseSuccess(true));
    //yield put(CourseActions.registerFreeCourseFailure(error));
    //yield put(AppActions.showError(error.message));
  }
}

export default courseRootSaga;
