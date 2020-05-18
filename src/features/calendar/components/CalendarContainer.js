import React, { useEffect, useState } from 'react';
import { loadReminders, showModal } from '../../reminder/reminderActions';
import { monthSelector, yearSelector } from '../calendarSelectors';
import { nextMonth, previousMonth } from '../calendarActions';

import { Calendar } from './Calendar';
import { connect } from 'react-redux';
import { remindersSelector } from '../../reminder/reminderSelectors';

export const _CalendarContainer = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    props.loadReminders().then(() => {
      setLoaded(true);
    });
  }, [loaded]);
  return (
    <Calendar
      month={props.month}
      year={props.year}
      onClick={props.showModal}
      reminders={props.reminders}
      nextMonth={props.nextMonth}
      previousMonth={props.previousMonth}
    />
  );
};

const mapStateToProps = (state) => ({
  month: monthSelector(state),
  reminders: remindersSelector(state),
  year: yearSelector(state),
});

const mapDispatchToProps = {
  nextMonth,
  previousMonth,
  loadReminders,
  showModal,
};

export const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(_CalendarContainer);
