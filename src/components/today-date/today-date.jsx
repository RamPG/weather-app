import React from 'react';

import './today-date.scss';
import TimeLibrary from '../../services/time-library';

const TodayDate = () => (
  <p>
    {`Today is 
    ${TimeLibrary.getMonthDayNow()} 
    ${TimeLibrary.getNameMonth(TimeLibrary.getMonthNow())} 
    ${TimeLibrary.getYearNow()} 
    ${TimeLibrary.getNameDay(TimeLibrary.getWeekDayNow())}`}
  </p>

);
export default TodayDate;
