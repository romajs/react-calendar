import * as R from 'ramda';
import * as actions from './reminderActions';

import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';
import moment from 'moment';

const DEFAULT_REMINDER = {
  city: '',
  color: 'Blue',
  date: '',
  name: '',
  time: '',
};

const initialState = Immutable({
  reminders: [],
  modal: {
    display: false,
    reminder: null,
  },
});

const getMomentDatetime = R.pipe(R.prop('datetime'), moment.bind(moment));

const getDate = R.pipe(getMomentDatetime, R.invoker(1, 'startOf')('day'), R.invoker(0, 'toDate'));

const getTime = R.pipe(getMomentDatetime, R.invoker(1, 'format')('HH:mm'));

const getReminder = R.pipe(
  R.tap(console.log),
  R.merge(DEFAULT_REMINDER),
  R.converge(R.assoc('date'), [getDate, R.identity]),
  R.converge(R.assoc('time'), [getTime, R.identity]),
  R.dissoc('datetime'),
);

export const reminderReducer = handleActions(
  {
    [actions.setModalDisplay]: (state, { payload }) => {
      return Immutable.setIn(state, ['modal', 'display'], payload.display).setIn(
        ['modal', 'reminder'],
        getReminder(payload.reminder),
      );
    },
    [actions.setReminders]: (state, { payload }) => {
      return Immutable.set(state, 'reminders', payload);
    },
    [actions.setReminderField]: (state, { payload }) => {
      return Immutable.setIn(state, ['modal', 'reminder', payload.name], payload.value);
    },
  },
  initialState,
);
