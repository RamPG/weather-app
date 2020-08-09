import React from 'react';
import { WeatherApi } from '../services/WeatherApi';

const WeatherApiContext = React.createContext(new WeatherApi());

export { WeatherApiContext };
