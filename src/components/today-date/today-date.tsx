import React, { FunctionComponent } from 'react';

import './today-date.scss';
import {
  getMonthDayNow, getNameMonth, getMonthNow,
  getYearNow, getNameDay, getWeekDayNow,
} from '../../services/time-library';

export const TodayDate: FunctionComponent = () => (
  <p>
    {`Today is 
    ${getMonthDayNow()} 
    ${getNameMonth(getMonthNow())} 
    ${getYearNow()} 
    ${getNameDay(getWeekDayNow())}`}
  </p>
);
