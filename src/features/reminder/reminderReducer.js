import * as actions from './reminderActions';

import Immutable from 'seamless-immutable';
import { handleActions } from 'redux-actions';

const initialState = Immutable({
  reminders: [],
});

export const reminderReducer = handleActions(
  {
    [actions.setReminders]: (state, { payload }) => {
      return Immutable.set(state, 'reminders', payload);
    },
  },
  initialState,
);
