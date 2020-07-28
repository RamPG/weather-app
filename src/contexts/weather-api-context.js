import React from 'react';

const {
  Provider: WeatherApiProvider,
  Consumer: WeatherApiConsumer,
} = React.createContext();

export { WeatherApiConsumer, WeatherApiProvider };
