import * as R from 'ramda';

import { createSelector } from 'reselect';

const getReminder = R.prop('reminder');

const asMutable = R.invoker(0, 'asMutable');

export const remindersSelector = createSelector([getReminder], R.pipe(R.prop('reminders'), asMutable));
