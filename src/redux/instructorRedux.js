import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  getInstructorsRequest: ['actionSuccess'],
  getInstructorsFailure: null,
  getInstructorsSuccess: ['instructors', 'payload'],
});

export const InstructorTypes = Types;
export default Creators;

/* ----------------------Initial State---------------------------- */

export const INITIAL_STATE = Immutable({
  instructors: undefined,
  payload: undefined,
  error: undefined,
});

/*-----------------------Reducers ---------------------------------- */
const getInstructorsRequest = (state) => {
  console.log('redux');
  return state.merge({});
};

const getInstructorsSuccess = (state) => {
  return state.merge();
};

const getInstructorsFailure = (state, {error}) => {
  return state.merge({error});
};

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_INSTRUCTORS_REQUEST]: getInstructorsRequest,
  [Types.GET_INSTRUCTORS_SUCCESS]: getInstructorsSuccess,
  [Types.GET_INSTRUCTORS_FAILURE]: getInstructorsFailure,
});
