import * as actions from './calendarActions';

import { getCurrentMonth, getCurrentYear } from './calendarService';

import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const initialState = Immutable({
  month: getCurrentMonth(),
  year: getCurrentYear(),
});

export const calendarReducer = handleActions(
  {
    [actions.setDate]: (state, { payload }) => {
      return Immutable.set(state, 'month', payload.month).set('year', payload.year);
    },
  },
  initialState,
);
