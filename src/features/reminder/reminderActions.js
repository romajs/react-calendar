import * as R from 'ramda';

import { createReminder, listReminders, updateReminder } from './reminderService';

import { createActions } from 'redux-actions';

export const { setModalDisplay, setReminders } = createActions(
  {
    SET_MODAL_DISPLAY: R.identity,
    SET_REMINDERS: R.identity,
  },
  {
    prefix: 'REMINDER',
  },
);

export const showModal = (reminder) => (dispatch) => {
  dispatch(setModalDisplay({ display: true, reminder }));
};

export const hideModal = () => (dispatch) => {
  dispatch(setModalDisplay({ display: false }));
};

export const loadReminders = () => async (dispatch) => {
  const reminders = await listReminders();
  dispatch(setReminders(reminders));
};

export const saveReminder = (reminder) => async (dispatch) => {
  if (R.propSatisfies(R.isNil, 'id', reminder)) {
    await createReminder(reminder);
  } else {
    await updateReminder(reminder);
  }
  dispatch(hideModal());
  dispatch(loadReminders());
};
