import React, { FunctionComponent } from 'react';

import './today-date.scss';
import {
  getMonthDay, getNameMonth, getMonth,
  getYear, getNameDay, getWeekDay,
} from '../../services/TimeLibrary';

export const TodayDate: FunctionComponent = () => (
  <p>
    {`Today is 
    ${getMonthDay()} 
    ${getNameMonth(getMonth())} 
    ${getYear()} 
    ${getNameDay(getWeekDay())}`}
  </p>
);
