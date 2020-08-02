import React from 'react';
import { WeatherApi } from '../services/weather-api';

const WeatherApiContext = React.createContext(new WeatherApi());

export { WeatherApiContext };
