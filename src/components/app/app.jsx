import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { WeatherApiProvider, GeoApiProvider } from '../../contexts';
import WeatherCard from '../weather-card';
import WeatherList from '../weather-list';
import Clock from '../clock';
import TodayDate from '../today-date';
import SearchForm from '../search-form';

import store from '../../store';

import WeatherAPI from '../../services/weather-api';
import GeoAPI from '../../services/geo-api';

const weatherApi = new WeatherAPI();
const geoApi = new GeoAPI();

const App = () => (
  <Provider store={store}>
    <TodayDate />
    <Clock />
    <GeoApiProvider value={geoApi}>
      <SearchForm />
    </GeoApiProvider>
    <WeatherApiProvider value={weatherApi}>
      <WeatherCard />
      <WeatherList />
    </WeatherApiProvider>

  </Provider>
);

export default App;
