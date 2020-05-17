import './ReminderModal.scss';

import * as R from 'ramda';

import React, { useEffect, useState } from 'react';

import DatePicker from 'react-date-picker';
import TimePicker from 'react-time-picker';
import classNames from 'classnames';
import moment from 'moment';

const getTitle = R.ifElse(R.isNil, R.always('Create reminder'), R.always('Update reminder'));

const updateValue = R.curry((fn, event) => fn(event.target.value));

const getDate = R.pipe(R.prop('date'), moment.bind(moment), R.invoker(1, 'startOf')('day'), R.invoker(0, 'toDate'));

const getTime = R.pipe(R.prop('date'), moment.bind(moment), R.invoker(1, 'format')('HH:mm'));

export const ReminderModal = ({ display, onClose, onSave, reminder }) => {
  const [city, setCity] = useState('');
  const [color, setColor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  useEffect(() => {
    setCity(R.prop('city', reminder));
    setColor(R.propOr('Blue', 'color', reminder));
    setDate(getDate(reminder));
    setTime(getTime(reminder));
    setId(R.prop('id', reminder));
    setName(R.prop('name', reminder));
    console.log('date:', date);
    console.log('time:', time);
  }, [reminder]);
  const saveReminder = () => {
    console.log('date:', date);
    console.log('time:', time);
    const [hours, minutes] = time.split(':');
    console.log(hours, minutes);
    const datetime = moment(date).hours(hours).minutes(minutes);
    onSave({ id, name, city, color, date: datetime.toISOString() });
  };
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
                type="text"
                placeholder="Name"
                maxLength={30}
                value={name}
                onChange={updateValue(setName)}
              />
            </div>
            <div className="control">
              <label className="label">City</label>
              <input className="input" type="text" placeholder="City" value={city} onChange={updateValue(setCity)} />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <label className="label">Date</label>
              {/* <input className="input" type="text" placeholder="Date" /> */}
              <DatePicker value={date} onChange={setDate} calendarIcon={null} clearIcon={null} />
            </div>
            <div className="control">
              <label className="label">Time</label>
              {/* <input className="input" type="text" placeholder="Time" /> */}
              <TimePicker value={time} onChange={setTime} clockIcon={null} clearIcon={null} disableClock />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="control">
              <label className="label">Color</label>
              <div className="select">
                <select value={color} onChange={updateValue(setColor)}>
                  <option value="Blue">Blue</option>
                  <option value="Cyan">Cyan</option>
                  <option value="Green">Green</option>
                  <option value="Red">Red</option>
                  <option value="Turquoise">Turquoise</option>
                  <option value="Yellow">Yellow</option>
                </select>
              </div>
            </div>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={saveReminder}>
            Save changes
          </button>
          <button className="button" onClick={onClose}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
