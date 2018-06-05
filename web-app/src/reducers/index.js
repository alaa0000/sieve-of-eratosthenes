import { combineReducers } from 'redux';
import {
  get,
  isNil,
  replace,
} from 'lodash';
import * as ActionTypes from '../actions';

/**
 * Checks if a string is Nil (Null or Undefined) or has white spaces.
 */
export const isNilOrWhiteSpace = x => isNil(x) || replace(x, /\s/g, '').length < 1;

const initialState = {
  value: '',
  result: [],
  loading: false,
  error: null,
};

/**
 * Root reducer.
 */
const root = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ActionTypes.SET_VALUE: {
      if (isNilOrWhiteSpace(payload)) {
        return {
          ...initialState,
        };
      }

      return {
        ...state,
        value: payload,
      };
    }

    case ActionTypes.GET_MERDIAN_PRIME_NUMBERS_REQUEST:
      return {
        ...state,
        result: [],
        loading: true,
        error: null,
      };

    case ActionTypes.GET_MERDIAN_PRIME_NUMBERS_SUCCESS:
      return {
        ...state,
        result: payload.response,
        loading: false,
        error: null,
      };

    case ActionTypes.GET_MERDIAN_PRIME_NUMBERS_FAILURE:
      return {
        ...state,
        error: get(payload, 'response.error'),
        loading: false,
      };

    case ActionTypes.CANCEL:
      return {
        ...initialState,
        value: state.value,
      };

    case ActionTypes.RESET:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

/**
 * Combines the reducers for export.
 */
export default combineReducers({
  root,
});

