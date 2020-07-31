import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { WeatherApiProvider, GeoApiProvider } from '../../contexts';
import WeatherCard from '../weather-card';
import WeatherList from '../weather-list';
import SearchForm from '../search-form';

import store from '../../store';

import WeatherAPI from '../../services/weather-api';
import GeoAPI from '../../services/geo-api';
import ErrorBoundary from '../error-boundry';

const weatherApi = new WeatherAPI();
const geoApi = new GeoAPI();

const App = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <GeoApiProvider value={geoApi}>
        <SearchForm />
      </GeoApiProvider>
      <WeatherApiProvider value={weatherApi}>
        <WeatherCard />
        <WeatherList />
      </WeatherApiProvider>
    </Provider>
  </ErrorBoundary>
);

export default App;
