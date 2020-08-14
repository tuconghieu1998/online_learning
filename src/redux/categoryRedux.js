import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ---------------------  Types and Action Creators --------------------*/
const {Types, Creators} = createActions({
  getCategoriesRequest: ['actionSuccess'],
});

export const CategoryTypes = Types;
export default Creators;

/* ----------------------Initial State---------------------------- */

export const INITIAL_STATE = Immutable({
  categories: undefined,
});

/*-----------------------Reducers ---------------------------------- */
const getCategoriesRequest = (state) => {
  return state.merge({});
};

/* ------------------------- Hookup Reducers To Types -------------*/
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_CATEGORIES_REQUEST]: getCategoriesRequest,
});
