import React, { FunctionComponent } from 'react';

import './weather-card.scss';

import { TransformedCurrentDataType } from '../../types/state-types';

export const WeatherCard: FunctionComponent<{ data: TransformedCurrentDataType }> = ({
  data: {
    feelsLike, humidity, temp, weather, windSpeed, imgLink,
  },
}) => (
  <section>
    <p>
      {temp}
    </p>
    <p>
      <img src={imgLink} alt="weather" height="100" width="100" />
    </p>
    <p>
      {weather}
    </p>
    <p>
      Feels like
      {' '}
      {feelsLike}
    </p>
    <p>
      {windSpeed}
      {' '}
      m/s
    </p>
    <p>
      {humidity}
      %
    </p>
  </section>
);
