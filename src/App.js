import './App.scss';

import { CalendarContainer } from './features/calendar/components/CalendarContainer';
import React from 'react';
import { ReminderContainer } from './features/reminder/components/ReminderContainer';

export const App = () => (
  <div className="app">
    <CalendarContainer />
    <ReminderContainer />
  </div>
);
