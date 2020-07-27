import React from 'react';

import './today-date.scss';
import {
  getWeekDayNow, getMonthDayNow, getYearNow, getMonthNow, getNameDay, getNameMonth,
} from '../../services/time-library';

const TodayDate = () => (
  <h1>
    {`Today is ${getMonthDayNow()} ${getNameMonth(getMonthNow())} ${getYearNow()} ${getNameDay(getWeekDayNow())}`}
  </h1>

);
export default TodayDate;
