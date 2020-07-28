import React from 'react';
import { Provider } from 'react-redux';

import './app.scss';

import { WeatherApiProvider } from '../../contexts';
import WeatherCard from '../weather-card';
import WeatherList from '../weather-list';
import Clock from '../clock';
import TodayDate from '../today-date';

import store from '../../store';

import WeatherAPI from '../../services/weather-api';

const weatherApi = new WeatherAPI();

const App = () => (
  <Provider store={store}>
    <WeatherApiProvider value={weatherApi}>
      <TodayDate />
      <Clock />
      <WeatherCard />
      <WeatherList />
    </WeatherApiProvider>

  </Provider>
);

export default App;
