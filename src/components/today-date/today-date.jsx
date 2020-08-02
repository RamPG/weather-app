import React from 'react';

import './today-date.scss';
import {
  getMonthDayNow, getNameMonth, getMonthNow,
  getYearNow, getNameDay, getWeekDayNow,
} from '../../services/time-library';

export const TodayDate = () => (
  <p>
    {`Today is 
    ${getMonthDayNow()} 
    ${getNameMonth(getMonthNow())} 
    ${getYearNow()} 
    ${getNameDay(getWeekDayNow())}`}
  </p>
);
