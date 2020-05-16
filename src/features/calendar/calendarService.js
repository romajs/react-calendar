import moment from 'moment';

export const getCurrentMonth = () => moment().get('month');

export const getCurrentYear = () => moment().get('year');

export const getMonthCalendar = (month, year) => {
  const monthCalendar = {
    weeks: [],
  };

  const startOfMonth = moment().month(month).year(year).startOf('month');
  const endOfMonth = startOfMonth.clone().endOf('month').startOf('day');

  // console.log('startOfMonth:', startOfMonth.toISOString());
  // console.log('endOfMonth:', endOfMonth.toISOString());

  let date = startOfMonth.clone().startOf('week');
  let weekOfMonth = 0;

  while (date.isSameOrBefore(endOfMonth)) {
    const week = {
      // month,
      weekOfMonth,
      dates: [],
    };
    for (let i = 0; i < 7; i++) {
      // console.log('date:', date.toISOString());
      week.dates.push(date);
      date = date.clone().add(1, 'days');
    }
    monthCalendar.weeks.push(week);
    weekOfMonth++;
  }

  return monthCalendar;
};
