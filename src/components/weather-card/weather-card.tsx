import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import './weather-card.scss';

import { TodayDate } from '../today-date';

import { DataCurrentStateType, InitialStateType } from '../../types/state-types';

const WeatherCardRender: FunctionComponent<DataCurrentStateType> = ({
  feelsLike, humidity, temp, weather, windSpeed, imgLink,
}) => (
  <section className="main-card">
    <TodayDate />
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

export const WeatherCard: FunctionComponent = () => {
  const { isLoading, isError, data } = useSelector(({ current }: InitialStateType) => current);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return <WeatherCardRender {...data} />;
};
