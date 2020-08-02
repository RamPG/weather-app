import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { WeatherApiContext, GeoApiContext } from '../../contexts';
import { WeatherCard } from '../weather-card';
import { WeatherList } from '../weather-list';
import { SearchForm } from '../search-form';

import { store } from '../../store';

import { WeatherApi } from '../../services/weather-api';
import { GeoApi } from '../../services/geo-api';
import { ErrorBoundary } from '../error-boundry';
import { Clock } from '../clock';

const weatherApi = new WeatherApi();
const geoApi = new GeoApi();

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <GeoApiContext.Provider value={geoApi}>
        <SearchForm />
      </GeoApiContext.Provider>
      <Clock />
      <WeatherApiContext.Provider value={weatherApi}>
        <WeatherCard />
        <WeatherList />
      </WeatherApiContext.Provider>
    </Provider>
  </ErrorBoundary>
);

export default App;
