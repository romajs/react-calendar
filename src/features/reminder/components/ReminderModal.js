import './ReminderModal.scss';

import * as R from 'ramda';

import DatePicker from 'react-date-picker';
import React from 'react';
import TimePicker from 'react-time-picker';
import classNames from 'classnames';

const isNotNil = R.complement(R.isNil);

const hasId = R.ifElse(R.isNil, R.F, R.propSatisfies(isNotNil, 'id'));

const getTitle = R.ifElse(hasId, R.always('Update reminder'), R.always('Create reminder'));

export const ReminderModal = ({ display, onCancel, onClose, onSave, reminder, updateField }) => {
  const updateRawField = R.curry((name, event) => updateField(name, R.path(['target', 'value'], event)));
  return (
    <div className={classNames('modal', { 'is-active': display })}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{getTitle(reminder)}</p>
          <button className="delete" aria-label="close" onClick={onClose} />
        </header>
        <section className="modal-card-body">
          <div className="field is-grouped">
            <div className="control">
              <label className="label">Name</label>
              <input
                className="input"
                maxLength={30}
                onChange={updateRawField('name')}
                placeholder="Name"
                type="text"
                value={R.prop('name', reminder)}
              />
            </div>
            <div className="control">
              <label className="label">Date</label>
              <DatePicker
                calendarIcon={null}
                clearIcon={null}
                disableCalendar
                onChange={updateField('date')}
                value={R.prop('date', reminder)}
              />
            </div>
            <div className="control">
              <label className="label">Time</label>
              <TimePicker
                clearIcon={null}
                clockIcon={null}
                disableClock
                onChange={updateField('time')}
                value={R.prop('time', reminder)}
              />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <label className="label">City</label>
              <input
                className="input"
                onChange={updateRawField('city')}
                placeholder="City"
                type="text"
                value={R.prop('city', reminder)}
              />
            </div>
            <div className="control">
              <label className="label">Color</label>
              <div className="select">
                <select value={R.prop('color', reminder)} onChange={updateRawField('color')}>
                  <option value="Blue">Blue</option>
                  <option value="Cyan">Cyan</option>
                  <option value="Green">Green</option>
                  <option value="Red">Red</option>
                  <option value="Turquoise">Turquoise</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>
            </div>
            <div className="control is-disabled" title={R.path(['weather', 'description'], reminder)}>
              <label className="label">Weather</label>
              <p className="reminder-modal__weather">
                {R.path(['weather', 'icon'], reminder) ? (
                  <>
                    {R.path(['weather', 'main'], reminder)}
                    <img src={`http://openweathermap.org/img/wn/${R.path(['weather', 'icon'], reminder)}.png`} />
                  </>
                ) : (
                  <span className="has-text-grey">No information</span>
                )}
              </p>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={onSave}>
            Save changes
          </button>
          <button className="button" onClick={onCancel}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
