
/**
 * Actions.
 */
export const SET_VALUE = 'SET_VALUE';
export const CANCEL = 'CANCEL';
export const RESET = 'RESET';
export const GET_MERDIAN_PRIME_NUMBERS_REQUEST = 'GET_MERDIAN_PRIME_NUMBERS_REQUEST';
export const GET_MERDIAN_PRIME_NUMBERS_SUCCESS = 'GET_MERDIAN_PRIME_NUMBERS_SUCCESS';
export const GET_MERDIAN_PRIME_NUMBERS_FAILURE = 'GET_MERDIAN_PRIME_NUMBERS_FAILURE';

/**
 * Action creator to set a value.
 */
export const setValue = payload => ({
  type: SET_VALUE,
  payload,
});

/**
 * Action creator to cancel the current request.
 */
export const cancel = () => ({
  type: CANCEL,
});

/**
 * Action creator to reset the values.
 */
export const reset = () => ({
  type: RESET,
});

/**
 * Action creator to get the median of prime number - Request.
 */
export const getMerdianPrimeNumbersRequest = payload => ({
  type: GET_MERDIAN_PRIME_NUMBERS_REQUEST,
  payload,
});

/**
 * Action creator to get the median of prime number - Success.
 */
export const getMerdianPrimeNumbersSuccess = payload => ({
  type: GET_MERDIAN_PRIME_NUMBERS_SUCCESS,
  payload,
});

/**
 * Action creator to get the median of prime number - Failure.
 */
export const getMerdianPrimeNumbersFailure = payload => ({
  type: GET_MERDIAN_PRIME_NUMBERS_FAILURE,
  payload,
});

