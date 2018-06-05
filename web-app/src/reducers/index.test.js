import reducer, { isNilOrWhiteSpace } from './';
import * as types from '../actions';

const initialState = {
  value: '',
  result: [],
  loading: false,
  error: null,
};

describe('root reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      root: {
        ...initialState,
      },
    });
  });

  it('should handle SET_VALUE', () => {
    // State before dispatching the action.
    const stateBefore = {
      root: {
        ...initialState,
      },
    };

    // The dispatched action.
    const actionDispatched = {
      type: types.SET_VALUE,
      payload: '123',
    };

    // State after dispatching the action.
    const stateAfter = {
      root: {
        value: '123',
        result: [],
        loading: false,
        error: null,
      },
    };

    expect(reducer(stateBefore, actionDispatched)).toEqual(stateAfter);
  });

  it('should handle GET_MERDIAN_PRIME_NUMBERS_REQUEST', () => {
    // State before dispatching the action.
    const stateBefore = {
      root: {
        ...initialState,
      },
    };

    // The dispatched action.
    const actionDispatched = {
      type: types.GET_MERDIAN_PRIME_NUMBERS_REQUEST,
      payload: '123',
    };

    // State after dispatching the action.
    const stateAfter = {
      root: {
        ...initialState,
        result: [],
        loading: true,
      },
    };

    expect(reducer(stateBefore, actionDispatched)).toEqual(stateAfter);
  });

  it('should handle GET_MERDIAN_PRIME_NUMBERS_SUCCESS', () => {
    // State before dispatching the action.
    const stateBefore = {
      root: {
        ...initialState,
      },
    };

    // The dispatched action.
    const actionDispatched = {
      type: types.GET_MERDIAN_PRIME_NUMBERS_SUCCESS,
      payload: {
        response: [3, 5],
      },
    };

    // State after dispatching the action.
    const stateAfter = {
      root: {
        ...initialState,
        result: [3, 5],
        loading: false,
      },
    };

    expect(reducer(stateBefore, actionDispatched)).toEqual(stateAfter);
  });

  it('should handle GET_MERDIAN_PRIME_NUMBERS_FAILURE', () => {
    // State before dispatching the action.
    const stateBefore = {
      root: {
        ...initialState,
      },
    };

      // The dispatched action.
    const actionDispatched = {
      type: types.GET_MERDIAN_PRIME_NUMBERS_FAILURE,
      payload: {
        response: {
          error: 'some error',
        },
      },
    };

      // State after dispatching the action.
    const stateAfter = {
      root: {
        ...initialState,
        error: 'some error',
        loading: false,
      },
    };

    expect(reducer(stateBefore, actionDispatched)).toEqual(stateAfter);
  });

  it('should handle CANCEL', () => {
    // State before dispatching the action.
    const stateBefore = {
      root: {
        ...initialState,
      },
    };

    // The dispatched action.
    const actionDispatched = {
      type: types.CANCEL,

    };

    // State after dispatching the action.
    const stateAfter = {
      root: {
        ...initialState,
      },
    };

    expect(reducer(stateBefore, actionDispatched)).toEqual(stateAfter);
  });

  it('should handle RESET', () => {
    // State before dispatching the action.
    const stateBefore = {
      root: {
        ...initialState,
      },
    };

    // The dispatched action.
    const actionDispatched = {
      type: types.RESET,

    };

    // State after dispatching the action.
    const stateAfter = {
      root: {
        ...initialState,
      },
    };

    expect(reducer(stateBefore, actionDispatched)).toEqual(stateAfter);
  });
});

describe('isNilOrWhiteSpace', () => {
  it('should return true if an empty string is provided', () => {
    expect(isNilOrWhiteSpace('')).toBeTruthy();
  });

  it('should return true when null is provided', () => {
    expect(isNilOrWhiteSpace(null)).toBeTruthy();
  });

  it('should return true when undefined is provided', () => {
    expect(isNilOrWhiteSpace(undefined)).toBeTruthy();
  });

  it('should return true when white space is provided', () => {
    expect(isNilOrWhiteSpace('   ')).toBeTruthy();
  });

  it('should return false when a alphanumeric string is provided', () => {
    expect(isNilOrWhiteSpace()).toBeTruthy();
  });

  it('should return false when a alphanumeric string is provided', () => {
    expect(isNilOrWhiteSpace('abc1234')).toBeFalsy();
  });

  it('should return false when a numeric value is provided', () => {
    expect(isNilOrWhiteSpace(1234)).toBeFalsy();
  });
});
