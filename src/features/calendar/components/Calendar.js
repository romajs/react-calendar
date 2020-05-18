import './Calendar.scss';

import * as R from 'ramda';

import { CalendarDate } from './CalendarDate';
import React from 'react';
import { getMonthCalendar } from '../calendarService';
import moment from 'moment';

const filterByDate = R.curry((date, reminder) => {
  const startOfDay = date.clone().startOf('day');
  const endOfDay = date.clone().endOf('day');
  const datetime = moment(reminder.datetime);
  return datetime.isSameOrAfter(startOfDay) && datetime.isSameOrBefore(endOfDay);
});

const sortByDateAsc = R.sortBy(R.prop('datetime'));

const filterReminders = (date, reminders) => R.pipe(R.filter(filterByDate(date)), sortByDateAsc)(reminders);

export const Calendar = ({ month, year, onClick, reminders }) => {
  const monthCalendar = getMonthCalendar(month, year);
  return (
    <div className="calendar">
      <div className="calendar__header">
        <div className="calendar__header__week-day">Sunday</div>
        <div className="calendar__header__week-day">Monday</div>
        <div className="calendar__header__week-day">Tuesday</div>
        <div className="calendar__header__week-day">Wednesday</div>
        <div className="calendar__header__week-day">Thursday</div>
        <div className="calendar__header__week-day">Friday</div>
        <div className="calendar__header__week-day">Saturday</div>
      </div>
      <div className="calendar__body">
        {monthCalendar.weeks.map((week) => (
          <div key={week.weekOfMonth} className="calendar__body__week">
            {week.dates.map((date) => (
              <CalendarDate
                key={date.dayOfYear()}
                date={date}
                targetMonth={month}
                onClick={onClick}
                reminders={filterReminders(date, reminders)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
