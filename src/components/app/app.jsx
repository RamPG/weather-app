import React from 'react';

import './app.scss';

import WeatherCard from '../weather-card';
import WeatherList from '../weather-table';
import Clock from '../clock';
import TodayDate from '../today-date';

const App = () => (
  <main>
    <TodayDate />
    <Clock />
    <WeatherCard />
    <WeatherList />
  </main>
);

export default App;
