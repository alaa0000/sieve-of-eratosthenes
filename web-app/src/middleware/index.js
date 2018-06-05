import { of } from 'rxjs';
import {
  combineEpics,
  ofType,
} from 'redux-observable';
import { toInteger } from 'lodash';
import {
  catchError,
  map,
  debounceTime,
  switchMap,
  takeUntil,
  repeat,
  filter,
  mapTo,
} from 'rxjs/operators';
import * as actions from '../actions';

const webApiHost = 'http://localhost:3001';

/**
 * Calls the web-api to get the median prime numbers for the input value.
 */
const getMedianPrimeNumbers$ = (value, { ajax }) => ajax(`${webApiHost}/median-prime-numbers/${value}`);

/**
 * Epic to dispatch the getMerdianPrimeNumbersRequest when a value is set.
 */
export const setValueEpic =
  action$ =>
    action$.pipe(
      ofType(actions.SET_VALUE),
      filter(action => toInteger(action.payload) > 0),
      mapTo(actions.getMerdianPrimeNumbersRequest()),
    );

/**
 * Epic to get the median prime numbers.
 */
export const getMedianPrimeNumbersEpic =
  (action$, state$, dependencies) =>
    action$.pipe(
      ofType(actions.GET_MERDIAN_PRIME_NUMBERS_REQUEST),
      debounceTime(500),
      switchMap(() =>
        getMedianPrimeNumbers$(state$.value.root.value, dependencies).pipe(
          map(response => actions.getMerdianPrimeNumbersSuccess(response)),
          catchError(error => of(actions.getMerdianPrimeNumbersFailure(error))),
        )),
      takeUntil(action$.pipe(ofType(actions.CANCEL))),
      repeat(),
    );

/**
 * Combining all the epics for export.
 */
export default combineEpics(
  getMedianPrimeNumbersEpic,
  setValueEpic,
);
