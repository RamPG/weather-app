import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { WeatherApiContext } from '../../contexts';
import { SearchForm } from '../search-form';

import { store } from '../../store';

import { WeatherApi } from '../../services/weather-api';
import {
  getHours,
  getMinutes,
  getMonth,
  getMonthDay, getNameDay,
  getNameMonth,
  getSeconds, getWeekDay,
  getYear,
} from '../../services/time-library';
import { ErrorBoundary } from '../error-boundry';
import { Clock } from '../clock';
import { WeatherInfo } from '../weather-info/weather-info';
import { TodayDate } from '../today-date';

const weatherApi: WeatherApi = new WeatherApi();

export const App: FunctionComponent = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <WeatherApiContext.Provider value={weatherApi}>
        <SearchForm />
      </WeatherApiContext.Provider>
      <Clock
        hoursStart={getHours()}
        minutesStart={getMinutes()}
        secondsStart={getSeconds()}
      />
      <TodayDate
        monthDay={getMonthDay()}
        nameMonth={getNameMonth(getMonth())}
        year={getYear()}
        nameDay={getNameDay(getWeekDay())}
      />
      <WeatherInfo />
    </Provider>
  </ErrorBoundary>
);
