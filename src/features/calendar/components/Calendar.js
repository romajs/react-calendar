import { getCurrentMonth, getCurrentYear } from '../calendarService';

import { CalendarHeader } from './CalendarHeader';
import { CalendarMonth } from './CalendarMonth';
import React from 'react';

export const Calendar = () => {
  const month = getCurrentMonth();
  const year = getCurrentYear();
  return (
    <>
      <CalendarHeader />
      <CalendarMonth month={month} year={year} />
    </>
  );
};
