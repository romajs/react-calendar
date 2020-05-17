import * as R from 'ramda';

import { createActions } from 'redux-actions';

export const { setReminders } = createActions(
  {
    SET_REMINDERS: R.identity,
  },
  {
    prefix: 'REMINDER',
  },
);
