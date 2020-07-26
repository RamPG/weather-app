import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import WeatherAPI from './services/weather-api';

const test = new WeatherAPI();
test.getWeatherDataToday(0).then((res) => console.log(res));
test.getWeatherSevenDays(0).then((res) => console.log(res));
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
