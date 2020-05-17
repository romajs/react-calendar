import './CalendarReminder.scss';

import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

export const CalendarReminder = ({ reminder, onClick }) => {
  const className = classNames('calendar__date__reminder', `calendar__date__reminder--${reminder.color.toLowerCase()}`);
  return (
    <p key={reminder.id} className={className} onClick={onClick}>
      {moment(reminder.datetime).format('HH:mm')} - {reminder.name}
    </p>
  );
};
