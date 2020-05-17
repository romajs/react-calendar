import React from 'react';
import classNames from 'classnames';

export const ReminderModal = ({ display, onClose }) => {
  return (
    <div className={classNames('modal', { 'is-active': display })}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Create reminder</p>
          <button className="delete" aria-label="close" onClick={onClose} />
        </header>
        <section className="modal-card-body">
          <div className="field is-grouped">
            <div className="control">
              <label className="label">Name</label>
              <input className="input" type="text" placeholder="Name" maxLength={30} />
            </div>
            <div className="control">
              <label className="label">City</label>
              <input className="input" type="text" placeholder="City" maxLength={30} />
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <label className="label">Date</label>
              <input className="input" type="text" placeholder="Date" maxLength={30} />
            </div>
            <div className="control">
              <label className="label">Time</label>
              <input className="input" type="text" placeholder="Time" maxLength={30} />
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="control">
              <label className="label">Color</label>
              <div className="select">
                <select>
                  <option />
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
          <button className="button is-success" onClick={null}>
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
