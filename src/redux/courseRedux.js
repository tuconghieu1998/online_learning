import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  getTopSellingRequest: ['params', 'actionSuccess'],
  getTopSellingFailure: null,
  getTopSellingSuccess: ['courses', 'payload'],

  getTopRatingRequest: ['params', 'actionSuccess'],
  getTopRatingFailure: null,
  getTopRatingSuccess: ['courses', 'payload'],

  getContinueLearningRequest: ['actionSuccess'],
  getContinueLearningFailure: null,
  getContinueLearningSuccess: ['courses', 'payload'],

  getCoursesInFavoriteCatRequest: ['params', 'actionSuccess'],
  getCoursesInFavoriteCatFailure: null,
  getCoursesInFavoriteCatSuccess: ['courses', 'payload'],

  getIntroPageRequest: ['actionSuccess'],
  getIntroPageFailure: null,
  getIntroPageSuccess: ['courses', 'payload'],
});

export const CourseTypes = Types;
export default Creators;

/* ----------------------Initial State---------------------------- */

export const INITIAL_STATE = Immutable({
  courses: undefined,
  payload: undefined,
  error: undefined,
});

/*-----------------------Reducers ---------------------------------- */
const getTopSellingRequest = (state) => {
  return state.merge({});
};
const getTopSellingSuccess = (state) => {
  return state.merge();
};
const getTopSellingFailure = (state, {error}) => {
  return state.merge({error});
};

const getTopRatingRequest = (state) => {
  return state.merge({});
};
const getTopRatingSuccess = (state) => {
  return state.merge();
};
const getTopRatingFailure = (state, {error}) => {
  return state.merge({error});
};

const getContinueLearningRequest = (state) => {
  return state.merge({});
};
const getContinueLearningSuccess = (state) => {
  return state.merge();
};
const getContinueLearningFailure = (state, {error}) => {
  return state.merge({error});
};

const getCoursesInFavoriteCatRequest = (state) => {
  return state.merge({});
};
const getCoursesInFavoriteCatSuccess = (state) => {
  return state.merge();
};
const getCoursesInFavoriteCatFailure = (state, {error}) => {
  return state.merge({error});
};

const getIntroPageRequest = (state) => {
  return state.merge({});
};
const getIntroPageSuccess = (state) => {
  return state.merge();
};
const getIntroPageFailure = (state, {error}) => {
  return state.merge({error});
};

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOP_SELLING_REQUEST]: getTopSellingRequest,
  [Types.GET_TOP_SELLING_SUCCESS]: getTopSellingSuccess,
  [Types.GET_TOP_SELLING_FAILURE]: getTopSellingFailure,

  [Types.GET_TOP_RATING_REQUEST]: getTopRatingRequest,
  [Types.GET_TOP_RATING_SUCCESS]: getTopRatingSuccess,
  [Types.GET_TOP_RATING_FAILURE]: getTopRatingFailure,

  [Types.GET_CONTINUE_LEARNING_REQUEST]: getContinueLearningRequest,
  [Types.GET_CONTINUE_LEARNING_SUCCESS]: getContinueLearningSuccess,
  [Types.GET_CONTINUE_LEARNING_FAILURE]: getContinueLearningFailure,

  [Types.GET_COURSES_IN_FAVORITE_CAT_REQUEST]: getCoursesInFavoriteCatRequest,
  [Types.GET_COURSES_IN_FAVORITE_CAT_SUCCESS]: getCoursesInFavoriteCatSuccess,
  [Types.GET_COURSES_IN_FAVORITE_CAT_FAILURE]: getCoursesInFavoriteCatFailure,

  [Types.GET_INTRO_PAGE_REQUEST]: getIntroPageRequest,
  [Types.GET_INTRO_PAGE_SUCCESS]: getIntroPageSuccess,
  [Types.GET_INTRO_PAGE_FAILURE]: getIntroPageFailure,
});
