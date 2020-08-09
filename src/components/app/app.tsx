import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { WeatherApiContext } from '../../contexts';
import { WeatherCard } from '../weather-card';
import { WeatherList } from '../weather-list';
import { SearchForm } from '../search-form';

import { store } from '../../store';

import { WeatherApi } from '../../services/WeatherApi';
import { ErrorBoundary } from '../error-boundry';
import { Clock } from '../clock';

const weatherApi: WeatherApi = new WeatherApi();

export const App: FunctionComponent = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <WeatherApiContext.Provider value={weatherApi}>
        <SearchForm />
      </WeatherApiContext.Provider>
      <Clock />
      <WeatherCard />
      <WeatherList />
    </Provider>
  </ErrorBoundary>
);
