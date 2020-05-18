import * as R from 'ramda';
import * as reminderService from './reminderService';

import { createActions } from 'redux-actions';

export const { setModalDisplay, setReminders, setReminderField } = createActions(
  {
    SET_MODAL_DISPLAY: R.identity,
    SET_REMINDERS: R.identity,
    SET_REMINDER_FIELD: R.identity,
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
  const reminders = await reminderService.listReminders();
  dispatch(setReminders(reminders));
};

export const removeReminder = (id) => async (dispatch) => {
  await reminderService.removeReminder(id);
  dispatch(hideModal());
  dispatch(loadReminders());
};

export const saveReminder = (reminder) => async (dispatch) => {
  if (R.propSatisfies(R.isNil, 'id', reminder)) {
    await reminderService.createReminder(reminder);
  } else {
    await reminderService.updateReminder(reminder);
  }
  dispatch(hideModal());
  dispatch(loadReminders());
};
