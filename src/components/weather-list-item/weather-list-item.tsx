import React, { FunctionComponent } from 'react';

import './weather-list-item.scss';

import { TransformedDailyDataType } from '../../types/state-types';

export const WeatherListItem: FunctionComponent<TransformedDailyDataType> = ({
  weekDayName, monthDay, monthDayName, temp, weather, imgLink,
}) => (
  <>
    <p>
      {weekDayName}
    </p>
    <p>
      {monthDay}
      {' '}
      {monthDayName}
    </p>
    <p>
      <img
        src={imgLink}
        width="100"
        height="100"
        alt="weather"
      />
    </p>
    <p>
      {temp.day}
    </p>
    <p>
      {temp.night}
    </p>
    <p>
      {weather}
    </p>
  </>
);
