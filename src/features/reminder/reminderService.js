import { ReminderAPI } from './ReminderAPI';

const reminderAPI = new ReminderAPI(process.env.REACT_APP_REMINDER_API_URL);

export const createReminder = (reminder) => reminderAPI.createReminder(reminder);

export const listReminders = () => reminderAPI.listReminders();

export const removeReminder = (reminder) => reminderAPI.removeReminder(reminder);

export const updateReminder = ({ id, ...reminder }) => reminderAPI.updateReminder(id, reminder);
