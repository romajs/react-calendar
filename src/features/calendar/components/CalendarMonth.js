import { CalendarWeek } from './CalendarWeek';
import React from 'react';
import { getMonthCalendar } from '../calendarService';

export const CalendarMonth = ({ month, year }) => {
  const monthCalendar = getMonthCalendar(month, year);
  return monthCalendar.weeks.map((week) => <CalendarWeek key={week.weekOfMonth} dates={week.dates} month={month} />);
};
