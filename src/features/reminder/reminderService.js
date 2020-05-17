import { ReminderAPI } from './ReminderAPI';

const reminderAPI = new ReminderAPI('http://localhost:4000');

export const createReminder = (reminder) => reminderAPI.createReminder(reminder);

export const listReminders = () => reminderAPI.listReminders();

export const updateReminder = ({ id, ...reminder }) => reminderAPI.updateReminder(id, reminder);
