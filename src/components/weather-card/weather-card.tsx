import React, { FunctionComponent } from 'react';

import './weather-card.scss';

import { TransformedCurrentDataType } from '../../types/state-types';

export const WeatherCard: FunctionComponent<{ data: TransformedCurrentDataType }> = ({
  data: {
    feelsLike, humidity, temp, weather, windSpeed, imgLink,
  },
}) => (
  <section className="main-card">
    <p className="main-card__temp">
      {temp}
    </p>
    <p className="main-card__img-paragraph">
      <img className="main-card__img" src={imgLink} alt="weather" height="100" width="100" />
    </p>
    <p className="main-card__weather">
      {weather}
    </p>
    <p className="main-card__feels-like">
      Feels like
      {' '}
      {feelsLike}
    </p>
    <p className="main-card__wind-speed">
      {windSpeed}
      {' '}
      m/s
    </p>
    <p className="main-card__humidity">
      {humidity}
      %
    </p>
  </section>
);
