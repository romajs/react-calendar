import * as R from 'ramda';

import { displaySelector, reminderSelector, remindersSelector } from '../reminderSelectors';
import { hideModal, saveReminder, setReminderField } from '../reminderActions';

import React from 'react';
import { ReminderModal } from './ReminderModal';
import { connect } from 'react-redux';
import moment from 'moment';

export const _ReminderContainer = (props) => {
  console.log(props.reminder);
  const updateField = R.curry((name, value) => {
    // console.log('updateField:', { name, value });
    props.setReminderField({ name, value });
  });
  const saveReminder = () => {
    console.log(props.reminder);
    const reminder = R.pick(['id', 'name', 'city', 'color'], props.reminder);
    const [hours, minutes] = R.prop('time', props.reminder).split(':');
    const datetime = moment(R.prop('date', reminder)).hours(hours).minutes(minutes).toISOString();
    console.log({ ...reminder, datetime });
    props.saveReminder({ ...reminder, datetime });
  };
  return (
    <ReminderModal
      display={props.display}
      onClose={props.hideModal}
      onCancel={props.hideModal}
      onSave={saveReminder}
      reminder={props.reminder}
      updateField={updateField}
    />
  );
};

const mapStateToProps = (state) => ({
  display: displaySelector(state),
  reminder: reminderSelector(state),
});

const mapDispatchToProps = {
  setReminderField,
  saveReminder,
  hideModal,
};

export const ReminderContainer = connect(mapStateToProps, mapDispatchToProps)(_ReminderContainer);
