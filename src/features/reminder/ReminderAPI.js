import * as R from 'ramda';

import axios from 'axios';

const getData = R.prop('data');

export class ReminderAPI {
  constructor(url) {
    this._axios = axios.create({
      baseURL: url,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  get axios() {
    return this._axios;
  }

  createReminder(payload) {
    return this.axios.post(`/reminders`, payload).then(getData);
  }

  listReminders() {
    return this.axios.get(`/reminders`).then(getData);
  }

  updateReminder(id, payload) {
    return this.axios.put(`/reminders/${id}`, payload).then(getData);
  }
}
