import * as R from 'ramda';

import { monthSelector, yearSelector } from './calendarSelectors';

import { createActions } from 'redux-actions';
import moment from 'moment';

export const { setDate } = createActions(
  {
    SET_DATE: R.identity,
  },
  {
    prefix: 'REMINDER',
  },
);

export const nextMonth = () => (dispatch, getState) => {
  const month = monthSelector(getState());
  const year = yearSelector(getState());
  const date = moment().year(year).month(month).add(1, 'month');
  dispatch(setDate({ month: date.month(), year: date.year() }));
};

export const previousMonth = () => (dispatch, getState) => {
  const month = monthSelector(getState());
  const year = yearSelector(getState());
  const date = moment().year(year).month(month).add(-1, 'month');
  dispatch(setDate({ month: date.month(), year: date.year() }));
};
