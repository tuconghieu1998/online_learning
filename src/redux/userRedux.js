import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  registerRequest: ['params', 'actionSuccess'],
  registerFailure: null,
  registerSuccess: ['user', 'message'],
});

export const UserTypes = Types;
export default Creators;

/* ----------------------Initial State---------------------------- */

export const INITIAL_STATE = Immutable({
  message: undefined,
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

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_REQUEST]: registerRequest,
  [Types.REGISTER_SUCCESS]: registerSuccess,
  [Types.REGISTER_FAILURE]: registerFailure,
});
