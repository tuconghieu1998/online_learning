import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  registerRequest: ['params', 'actionSuccess'],
  registerFailure: null,
  registerSuccess: ['user', 'message'],

  loginRequest: ['params', 'actionSuccess'],
  loginFailure: null,
  loginSuccess: ['userInfo', 'token', 'message'],

  getInfoUserRequest: ['params', 'actionSuccess'],
  getInfoUserFailure: null,
  getInfoUserSuccess: ['userInfo', 'message'],

  forgotPasswordRequest: ['params', 'actionSuccess'],
  forgotPasswordFailure: null,
  forgotPasswordSuccess: ['message'],

  logout: ['actionSuccess'],

  getCourseLikeStatusRequest: ['params', 'actionSuccess'],

  likeCourseRequest: ['params', 'actionSuccess'],

  editProfileRequest: ['params', 'actionSuccess'],
  editProfileFailure: null,
  editProfileSuccess: ['userInfo'],
});

export const UserTypes = Types;
export default Creators;

/* ----------------------Initial State---------------------------- */

export const INITIAL_STATE = Immutable({
  user: undefined,
  token: undefined,
  message: undefined,
  userInfo: undefined,
  payload: undefined,
});

/*-----------------------Reducers ---------------------------------- */
const registerRequest = (state) => {
  return state.merge({});
};
const registerSuccess = (state, {message}) => {
  return state.merge({message});
};
const registerFailure = (state) => {
  return state.merge({});
};

const loginRequest = (state) => {
  return state.merge({});
};
const loginSuccess = (state, {userInfo, token, message}) => {
  return state.merge({userInfo, token, message});
};
const loginFailure = (state, {error}) => {
  return state.merge({error});
};

const logout = (state) => {
  return INITIAL_STATE;
};

const getInfoUserRequest = (state) => {
  return state.merge({});
};
const getInfoUserSuccess = (state, {userInfo, message}) => {
  return state.merge({userInfo, message});
};
const getInfoUserFailure = (state, {error}) => {
  return state.merge({error});
};

const forgotPasswordRequest = (state) => {
  return state.merge({});
};
const forgotPasswordSuccess = (state, {message}) => {
  return state.merge({message});
};
const forgotPasswordFailure = (state, {error}) => {
  return state.merge({error});
};

const getCourseLikeStatusRequest = (state) => {
  return state.merge({});
};

const likeCourseRequest = (state) => {
  return state.merge({});
};

const editProfileRequest = (state) => {
  return state.merge({});
};
const editProfileSuccess = (state, {userInfo}) => {
  return state.merge({userInfo});
};
const editProfileFailure = (state, {error}) => {
  return state.merge({error});
};

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAILURE]: registerFailure,

  [Types.LOGIN_REQUEST]: loginRequest,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,

  [Types.GET_INFO_USER_REQUEST]: getInfoUserRequest,
  [Types.GET_INFO_USER_SUCCESS]: getInfoUserSuccess,
  [Types.GET_INFO_USER_FAILURE]: getInfoUserFailure,

  [Types.LOGOUT]: logout,

  [Types.FORGOT_PASSWORD_REQUEST]: forgotPasswordRequest,
  [Types.FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [Types.FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure,

  [Types.GET_COURSE_LIKE_STATUS_REQUEST]: getCourseLikeStatusRequest,

  [Types.LIKE_COURSE_REQUEST]: likeCourseRequest,

  [Types.EDIT_PROFILE_REQUEST]: editProfileRequest,
  [Types.EDIT_PROFILE_SUCCESS]: editProfileSuccess,
  [Types.EDIT_PROFILE_FAILURE]: editProfileFailure,
});
