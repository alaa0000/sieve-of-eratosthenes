import { TestScheduler } from 'rxjs/testing';
import {
  ActionsObservable,
} from 'redux-observable';
import * as actions from '../actions';
import * as epics from './';

describe('setValueEpic', () => {
  it('should dispatch GET_MERDIAN_PRIME_NUMBERS_REQUEST when a positive value is provided', () => {
    const inputValues = {
      a: actions.setValue('123'),
    };

    const expectedValues = {
      a: actions.getMerdianPrimeNumbersRequest(),
    };
    const inputMarble = '   a';
    const expectedMarble = '---a';

    const ts = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    const action$ = new ActionsObservable(ts.createHotObservable(inputMarble, inputValues));
    const outputAction = epics.setValueEpic(action$);

    ts.expectObservable(outputAction).toBe(expectedMarble, expectedValues);
    ts.flush();
  });

  it('should not dispatch any action when a negative value is provided', () => {
    const inputValues = {
      a: actions.setValue('-123'),
    };

    const expectedValues = {};

    const inputMarble = '   a';
    const expectedMarble = '';

    const ts = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
    const action$ = new ActionsObservable(ts.createHotObservable(inputMarble, inputValues));
    const outputAction = epics.setValueEpic(action$);

    ts.expectObservable(outputAction).toBe(expectedMarble, expectedValues);
    ts.flush();
  });
});
