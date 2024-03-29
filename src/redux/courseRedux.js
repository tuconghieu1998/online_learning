import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  getTopSellingRequest: ['params', 'actionSuccess'],

  getTopNewRequest: ['params', 'actionSuccess'],

  getRecommendCourseRequest: ['params', 'actionSuccess'],

  getTopRatingRequest: ['params', 'actionSuccess'],

  getContinueLearningRequest: ['actionSuccess'],

  getCoursesInFavoriteCatRequest: ['params', 'actionSuccess'],

  getIntroPageRequest: ['actionSuccess'],

  getCourseDetailRequest: ['params', 'actionSuccess'],
  getCourseDetailSuccess: ['courseDetail'],
  getCourseDetailFailure: null,

  searchV2Request: ['params', 'actionSuccess'],

  getFavoriteCoursesRequest: ['actionSuccess'],

  searchRequest: ['keyword'],

  getHistoriesRequest: ['actionSuccess'],
  getHistoriesFailure: null,
  getHistoriesSuccess: ['hitories'],

  deleteHistoriesRequest: ['params', 'actionSuccess'],

  checkOwnCourseRequest: ['params', 'actionSuccess'],
  checkOwnCourseFailure: null,
  checkOwnCourseSuccess: ['isUserOwnCourse'],

  getUrlVideoRequest: ['params', 'actionSuccess'],
  getUrlVideoFailure: null,
  getUrlVideoSuccess: ['videoUrl', 'currentTime', 'lessonId'],

  setUrlVideoRequest: ['videoUrl', 'currentTime', 'lessonId'],

  updateCurrentTimeLearnVideoRequest: ['params', 'actionSuccess'],

  getLastWatchedLessonRequest: ['params', 'actionSuccess'],
  getLastWatchedLessonFailure: null,
  getLastWatchedLessonSuccess: ['videoUrl', 'currentTime', 'lessonId'],

  registerFreeCourseRequest: ['params', 'actionSuccess'],
  registerFreeCourseFailure: null,
  registerFreeCourseSuccess: ['isUserOwnCourse'],
});

export const CourseTypes = Types;
export default Creators;

/* ----------------------Initial State---------------------------- */

export const INITIAL_STATE = Immutable({
  keyword: undefined,
  courses: undefined,
  payload: undefined,
  error: undefined,
  histories: undefined,
  isUserOwnCourse: undefined,
  courseDetail: undefined,
  videoUrl: undefined,
  currentTime: undefined,
  lessonId: undefined,
});

/*-----------------------Reducers ---------------------------------- */
const getTopSellingRequest = (state) => {
  return state.merge({});
};

const getTopNewRequest = (state) => {
  return state.merge({});
};

const getRecommendCourseRequest = (state) => {
  return state.merge({});
};

const getTopRatingRequest = (state) => {
  return state.merge({});
};

const getContinueLearningRequest = (state) => {
  return state.merge({});
};

const getCoursesInFavoriteCatRequest = (state) => {
  return state.merge({});
};

const getIntroPageRequest = (state) => {
  return state.merge({});
};

const getCourseDetailRequest = (state) => {
  return state.merge({});
};
const getCourseDetailSuccess = (state, {courseDetail}) => {
  return state.merge({courseDetail});
};
const getCourseDetailFailure = (state, {error}) => {
  return state.merge({error});
};

const searchV2Request = (state) => {
  return state.merge({});
};

const getFavoriteCoursesRequest = (state) => {
  return state.merge({});
};

const searchRequest = (state, {keyword}) => {
  return state.merge({keyword});
};

const getHistoriesRequest = (state) => {
  return state.merge({});
};
const getHistoriesSuccess = (state, {histories}) => {
  return state.merge({histories});
};
const getHistoriesFailure = (state, {error}) => {
  return state.merge({error});
};

const deleteHistoriesRequest = (state) => {
  return state.merge({});
};

const checkOwnCourseRequest = (state) => {
  return state.merge({});
};
const checkOwnCourseSuccess = (state, {isUserOwnCourse}) => {
  return state.merge({isUserOwnCourse});
};
const checkOwnCourseFailure = (state, {error}) => {
  return state.merge({error});
};

const getUrlVideoRequest = (state) => {
  return state.merge({});
};
const getUrlVideoSuccess = (state, {videoUrl, currentTime, lessonId}) => {
  return state.merge({videoUrl, currentTime, lessonId});
};
const getUrlVideoFailure = (state, {error}) => {
  return state.merge({error});
};

const setUrlVideoRequest = (state, {videoUrl, currentTime, lessonId}) => {
  return state.merge({videoUrl, currentTime, lessonId});
};

const updateCurrentTimeLearnVideoRequest = (state) => {
  return state.merge({});
};

const getLastWatchedLessonRequest = (state) => {
  return state.merge({});
};
const getLastWatchedLessonSuccess = (
  state,
  {videoUrl, currentTime, lessonId},
) => {
  return state.merge({videoUrl, currentTime, lessonId});
};
const getLastWatchedLessonFailure = (state, {error}) => {
  return state.merge({error});
};

const registerFreeCourseRequest = (state) => {
  return state.merge({});
};
const registerFreeCourseSuccess = (state, {isUserOwnCourse}) => {
  return state.merge({isUserOwnCourse});
};
const registerFreeCourseFailure = (state, {error}) => {
  return state.merge({error});
};

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOP_SELLING_REQUEST]: getTopSellingRequest,

  [Types.GET_TOP_NEW_REQUEST]: getTopNewRequest,

  [Types.GET_RECOMMEND_COURSE_REQUEST]: getRecommendCourseRequest,

  [Types.GET_TOP_RATING_REQUEST]: getTopRatingRequest,

  [Types.GET_CONTINUE_LEARNING_REQUEST]: getContinueLearningRequest,

  [Types.GET_COURSES_IN_FAVORITE_CAT_REQUEST]: getCoursesInFavoriteCatRequest,

  [Types.GET_INTRO_PAGE_REQUEST]: getIntroPageRequest,

  [Types.GET_COURSE_DETAIL_REQUEST]: getCourseDetailRequest,
  [Types.GET_COURSE_DETAIL_SUCCESS]: getCourseDetailSuccess,
  [Types.GET_COURSE_DETAIL_FAILURE]: getCourseDetailFailure,

  [Types.SEARCH_V2_REQUEST]: searchV2Request,

  [Types.GET_FAVORITE_COURSES_REQUEST]: getFavoriteCoursesRequest,

  [Types.SEARCH_REQUEST]: searchRequest,

  [Types.GET_HISTORIES_REQUEST]: getHistoriesRequest,
  [Types.GET_HISTORIES_SUCCESS]: getHistoriesSuccess,
  [Types.GET_HISTORIES_FAILURE]: getHistoriesFailure,

  [Types.DELETE_HISTORIES_REQUEST]: deleteHistoriesRequest,

  [Types.CHECK_OWN_COURSE_REQUEST]: checkOwnCourseRequest,
  [Types.CHECK_OWN_COURSE_SUCCESS]: checkOwnCourseSuccess,
  [Types.CHECK_OWN_COURSE_FAILURE]: checkOwnCourseFailure,

  [Types.GET_URL_VIDEO_REQUEST]: getUrlVideoRequest,
  [Types.GET_URL_VIDEO_SUCCESS]: getUrlVideoSuccess,
  [Types.GET_URL_VIDEO_FAILURE]: getUrlVideoFailure,

  [Types.SET_URL_VIDEO_REQUEST]: setUrlVideoRequest,

  [Types.UPDATE_CURRENT_TIME_LEARN_VIDEO_REQUEST]: updateCurrentTimeLearnVideoRequest,

  [Types.GET_LAST_WATCHED_LESSON_REQUEST]: getLastWatchedLessonRequest,
  [Types.GET_LAST_WATCHED_LESSON_SUCCESS]: getLastWatchedLessonSuccess,
  [Types.GET_LAST_WATCHED_LESSON_FAILURE]: getLastWatchedLessonFailure,

  [Types.REGISTER_FREE_COURSE_REQUEST]: registerFreeCourseRequest,
  [Types.REGISTER_FREE_COURSE_SUCCESS]: registerFreeCourseSuccess,
  [Types.REGISTER_FREE_COURSE_FAILURE]: registerFreeCourseFailure,
});
