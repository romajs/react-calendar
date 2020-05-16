import './CalendarDay.scss';

import React from 'react';
import classNames from 'classnames';

export const CalendarDay = ({ date, month }) => {
  // console.log(date.toISOString());
  const weekDay = date.day();
  const weekend = weekDay === 0 || weekDay === 6;
  const outOfMonth = date.get('month') !== month;
  const className = classNames(
    'column',
    'calendar-day',
    'calendar-day--active',
    { 'calendar-day--weekend': weekend },
    { 'calendar-day--out-of-month': outOfMonth },
  );
  return <div className={className}>{date.get('date')}</div>;
};
