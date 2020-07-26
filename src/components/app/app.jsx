import React from 'react';

import WeatherCard from '../weather-card';
import WeatherList from '../weather-table';
import './app.scss';

const App = () => (
  <main>
    <WeatherCard />
    <WeatherList />
  </main>
);

export default App;
