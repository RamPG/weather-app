import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import './weather-card.scss';

import { TodayDate } from '../today-date';

import { DataCurrentStateType, InitialStateType } from '../../types/state-types';
import {
  getYear, getMonthDay, getNameMonth, getMonth, getNameDay, getWeekDay,
} from '../../services/time-library';
import { useReducerStateRender } from '../../user-hooks/use-reducer-state-render';

const WeatherCardRender: FunctionComponent<{ data: DataCurrentStateType }> = ({
  data: {
    feelsLike, humidity, temp, weather, windSpeed, imgLink,
  },
}) => (
  <section className="main-card">
    <TodayDate
      monthDay={getMonthDay()}
      nameMonth={getNameMonth(getMonth())}
      year={getYear()}
      nameDay={getNameDay(getWeekDay())}
    />
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
  return useReducerStateRender<DataCurrentStateType>(isLoading, isError, data, WeatherCardRender);
};
