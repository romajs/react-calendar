import * as R from 'ramda';

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
