import React from 'react';

import './today-date.scss';
import TimeLibrary from '../../services/time-library';

const TodayDate = () => (
  <h1>
    {`Today is 
    ${TimeLibrary.getMonthDayNow()} 
    ${TimeLibrary.getNameMonth(TimeLibrary.getMonthNow())} 
    ${TimeLibrary.getYearNow()} 
    ${TimeLibrary.getNameDay(TimeLibrary.getWeekDayNow())}`}
  </h1>

);
export default TodayDate;
