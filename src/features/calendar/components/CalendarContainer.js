import React, { useEffect, useState } from 'react';
import { loadReminders, showModal } from '../../reminder/reminderActions';
import { monthSelector, yearSelector } from '../calendarSelectors';

import { Calendar } from './Calendar';
import { connect } from 'react-redux';
import { remindersSelector } from '../../reminder/reminderSelectors';

export const _CalendarContainer = (props) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    props.loadReminders().then(() => {
      setLoaded(true);
      props.showModal(props.reminders[0]);
    });
  }, [loaded]);
  return <Calendar month={props.month} year={props.year} onClick={props.showModal} reminders={props.reminders} />;
};

const mapStateToProps = (state) => ({
  month: monthSelector(state),
  reminders: remindersSelector(state),
  year: yearSelector(state),
});

const mapDispatchToProps = {
  loadReminders,
  showModal,
};

export const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(_CalendarContainer);
