import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  getTopSellingRequest: ['params', 'actionSuccess'],
  getTopSellingFailure: null,
  getTopSellingSuccess: ['courses', 'payload'],
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
  console.log('redux course');
  return state.merge({});
};

const getTopSellingSuccess = (state) => {
  return state.merge();
};

const getTopSellingFailure = (state, {error}) => {
  return state.merge({error});
};

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOP_SELLING_REQUEST]: getTopSellingRequest,
  [Types.GET_TOP_SELLING_SUCCESS]: getTopSellingSuccess,
  [Types.GET_TOP_SELLING_FAILURE]: getTopSellingFailure,
});
