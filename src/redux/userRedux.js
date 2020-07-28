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
  getInfoUserSuccess: ['payload', 'message'],

  logout: ['actionSuccess'],
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

const getInfoUserSuccess = (state, {payload, message}) => {
  return state.merge({payload, message});
};

const getInfoUserFailure = (state, {error}) => {
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
});
