import './CalendarDate.scss';

import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

export const CalendarDay = ({ date, targetMonth, onClick, reminders }) => {
  if (reminders.length > 0) {
    console.log(date.toISOString(), reminders);
  }
  const weekDay = date.day();
  const weekend = weekDay === 0 || weekDay === 6;
  const inSameMonth = date.get('month') === targetMonth;
  const className = classNames(
    'calendar__date',
    'calendar__date--active',
    { 'calendar__date--weekend': weekend },
    { 'calendar__date--out-of-month': !inSameMonth },
  );
  return (
    <div className={className} onClick={onClick}>
      <p className="calendar__date__day">{date.get('date')}</p>
      <div className="calendar__date__reminders">
        {reminders.map((reminder) => (
          <p key={reminder.id} className="calendar__date__reminder">
            {moment(reminder.date).format('HH:mm')} - {reminder.name}
          </p>
        ))}
      </div>
    </div>
  );
};
