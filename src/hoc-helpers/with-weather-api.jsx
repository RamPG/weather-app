import React from 'react';
import { WeatherApiConsumer } from '../contexts';

const withWeatherApi = (Wrapped) => (props) => (
  <WeatherApiConsumer>
    {
      (weatherApi) => (<Wrapped {...props} weatherApi={weatherApi} />)
    }
  </WeatherApiConsumer>
);

export default withWeatherApi;
