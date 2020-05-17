import { calendarReducer } from '../features/calendar/calendarReducer';
import { combineReducers } from 'redux';
import { reminderReducer } from '../features/reminder/reminderReducer';

export default () =>
  combineReducers({
    calendar: calendarReducer,
    reminder: reminderReducer,
  });
