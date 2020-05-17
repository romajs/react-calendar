import './App.scss';

import React, { useEffect, useState } from 'react';
import { hideModal, setReminders, showModal } from './features/reminder/reminderActions';
import { modalSelector, remindersSelector } from './features/reminder/reminderSelectors';
import { monthSelector, yearSelector } from './features/calendar/calendarSelectors';

import { Calendar } from './features/calendar/components/Calendar';
import { ReminderModal } from './features/reminder/components/ReminderModal';
import { connect } from 'react-redux';
import { listReminders } from './features/reminder/reminderService';

export const _App = ({ month, year, reminders, setReminders, showModal, hideModal, modal }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    listReminders()
      .then(setReminders)
      .then(() => setLoaded(true));
  }, [loaded]);
  return (
    <>
      <Calendar month={month} year={year} onClick={showModal} reminders={reminders} />
      <ReminderModal display={modal.display} onClose={hideModal} />
    </>
  );
};

const mapStateToProps = (state) => ({
  month: monthSelector(state),
  reminders: remindersSelector(state),
  year: yearSelector(state),
  modal: modalSelector(state),
});

const mapDispatchToProps = {
  hideModal,
  setReminders,
  showModal,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
