import * as actions from './reminderActions';

import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const initialState = Immutable({
  reminders: [],
  modal: {
    display: true,
    reminder: null,
  },
});

export const reminderReducer = handleActions(
  {
    [actions.setModalDisplay]: (state, { payload }) => {
      return Immutable.setIn(state, ['modal', 'display'], payload.display).setIn(
        ['modal', 'reminder'],
        payload.reminder,
      );
    },
    [actions.setReminders]: (state, { payload }) => {
      return Immutable.set(state, 'reminders', payload);
    },
  },
  initialState,
);
