import './App.scss';

import React, { useEffect, useState } from 'react';
import { hideModal, loadReminders, saveReminder, showModal } from './features/reminder/reminderActions';
import { modalSelector, remindersSelector } from './features/reminder/reminderSelectors';
import { monthSelector, yearSelector } from './features/calendar/calendarSelectors';

import { Calendar } from './features/calendar/components/Calendar';
import { ReminderModal } from './features/reminder/components/ReminderModal';
import { connect } from 'react-redux';

export const _App = ({ month, year, reminders, loadReminders, showModal, hideModal, modal, saveReminder }) => {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    loadReminders().then(() => setLoaded(true));
  }, [loaded]);
  return (
    <>
      <Calendar month={month} year={year} onClick={showModal} reminders={reminders} />
      <ReminderModal display={modal.display} onClose={hideModal} onSave={saveReminder} reminder={modal.reminder} />
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
  loadReminders,
  showModal,
  saveReminder,
};

export const App = connect(mapStateToProps, mapDispatchToProps)(_App);
