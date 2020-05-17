import { getCurrentMonth, getCurrentYear } from './calendarService';

import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const initialState = Immutable({
  month: getCurrentMonth(),
  year: getCurrentYear(),
});

export const calendarReducer = handleActions({}, initialState);
