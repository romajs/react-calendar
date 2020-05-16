import './CalendarHeader.scss';

import React from 'react';

export const CalendarHeader = () => (
  <div className="columns calendar-header">
    <div className="column calendar-header__week-day">Sunday</div>
    <div className="column calendar-header__week-day">Monday</div>
    <div className="column calendar-header__week-day">Tuesday</div>
    <div className="column calendar-header__week-day">Wednesday</div>
    <div className="column calendar-header__week-day">Thursday</div>
    <div className="column calendar-header__week-day">Friday</div>
    <div className="column calendar-header__week-day">Saturday</div>
  </div>
);
