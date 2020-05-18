import './CalendarDate.scss';

import * as R from 'ramda';

import { CalendarReminder } from './CalendarReminder';
import React from 'react';
import classNames from 'classnames';

export const CalendarDate = ({ date, targetMonth, onClick, reminders }) => {
  const weekDay = date.day();
  const weekend = weekDay === 0 || weekDay === 6;
  const inSameMonth = date.get('month') === targetMonth;
  const className = classNames(
    'calendar__date',
    'calendar__date--active',
    { 'calendar__date--weekend': weekend },
    { 'calendar__date--out-of-month': !inSameMonth },
  );
  const createReminder = (event) => {
    event.stopPropagation();
    onClick({ datetime: date.toISOString() });
  };
  const editReminder = R.curry((reminder, event) => {
    event.stopPropagation();
    onClick(reminder);
  });
  return (
    <div className={className} onClick={createReminder}>
      <p className="calendar__date__day">{date.get('date')}</p>
      <div className="calendar__date__reminders">
        {reminders.map((reminder) => (
          <CalendarReminder key={reminder.id} reminder={reminder} onClick={editReminder(reminder)} />
        ))}
      </div>
    </div>
  );
};
