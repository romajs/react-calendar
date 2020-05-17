import * as R from 'ramda';

import { createSelector } from 'reselect';

const getCalendar = R.prop('calendar');

export const monthSelector = createSelector([getCalendar], R.prop('month'));

export const yearSelector = createSelector([getCalendar], R.prop('year'));
