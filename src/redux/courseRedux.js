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

  searchV2Request: ['params', 'actionSuccess'],

  getFavoriteCoursesRequest: ['actionSuccess'],

  searchRequest: ['keyword'],

  getHistoriesRequest: ['actionSuccess'],
  getHistoriesFailure: null,
  getHistoriesSuccess: ['hitories'],

  deleteHistoriesRequest: ['params', 'actionSuccess'],
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

  [Types.SEARCH_V2_REQUEST]: searchV2Request,

  [Types.GET_FAVORITE_COURSES_REQUEST]: getFavoriteCoursesRequest,

  [Types.SEARCH_REQUEST]: searchRequest,

  [Types.GET_HISTORIES_REQUEST]: getHistoriesRequest,
  [Types.GET_HISTORIES_SUCCESS]: getHistoriesSuccess,
  [Types.GET_HISTORIES_FAILURE]: getHistoriesFailure,

  [Types.DELETE_HISTORIES_REQUEST]: deleteHistoriesRequest,
});
