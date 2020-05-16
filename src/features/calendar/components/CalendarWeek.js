import { CalendarDay } from './CalendarDay';
import React from 'react';

export const CalendarWeek = ({ dates, month }) => (
  <div className="columns">
    {dates.map((date) => (
      <CalendarDay key={date.dayOfYear()} date={date} month={month} />
    ))}
  </div>
);
