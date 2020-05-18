import * as R from 'ramda';

import React, { useEffect } from 'react';
import { displaySelector, reminderSelector } from '../reminderSelectors';
import { hideModal, saveReminder, setReminderField } from '../reminderActions';

import { ReminderModal } from './ReminderModal';
import { connect } from 'react-redux';
import { getDailyForecast } from '../../weather/weatherService';
import moment from 'moment';

const getWeather = R.pipe(R.prop('list'), R.nth(0), R.prop('weather'), R.nth(0));

const canFetchWeather = R.allPass([R.prop('city'), R.prop('date'), R.prop('time')]);

export const _ReminderContainer = (props) => {
  const updateField = R.curry((name, value) => props.setReminderField({ name, value }));
  const saveReminder = () => {
    const reminder = R.pick(['id', 'name', 'city', 'color'], props.reminder);
    const date = R.prop('date', props.reminder);
    const [hours, minutes] = R.prop('time', props.reminder).split(':');
    const datetime = moment(date).hours(hours).minutes(minutes).toISOString();
    props.saveReminder({ ...reminder, datetime });
  };

  useEffect(() => {
    if (canFetchWeather(props.reminder)) {
      getDailyForecast(R.pick(['city', 'date', 'time'], props.reminder))
        .then(getWeather)
        .then((weather) => updateField('weather', weather));
    }
  }, [R.prop('city', props.reminder), R.prop('date', props.reminder), R.prop('time', props.reminder)]);

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
