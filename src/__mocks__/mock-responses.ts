import {
  GetGeoCityNameResponseType,
  GetGeoCoordsResponseType,
  GetWeatherResponseType,
} from '../types/response-types';

export const weatherResponseMock: GetWeatherResponseType = {
  lat: 25.5,
  lon: 24.4,
  timezone: '1200',
  timezone_offset: 3600,
  daily: [
    {
      dt: 5,
      sunrise: 5,
      sunset: 5,
      temp: {
        day: 25,
        min: 20,
        max: 27,
        night: 15,
        eve: 15,
        morn: 15,
      },
      feels_like: {
        day: 25,
        night: 21,
        eve: 23,
        morn: 24,
      },
      pressure: 10,
      humidity: 50,
      dew_point: 1,
      uvi: 1,
      clouds: 1,
      wind_speed: 34,
      wind_deg: 21,
      weather: [
        {
          id: 1,
          main: 'Clouds',
          icon: '04n',
        },
      ],
      pop: 25,
      rain: 15,
    },
  ],
  current: {
    dt: 5,
    sunrise: 5,
    sunset: 5,
    temp: 25,
    feels_like: 23,
    pressure: 10,
    humidity: 50,
    dew_point: 1,
    uvi: 1,
    clouds: 1,
    visibility: 1,
    wind_speed: 34,
    wind_deg: 21,
    weather: [
      {
        id: 1,
        main: 'Clouds',
        icon: '04n',
      },
    ],
  },
};

export const coordsResponseMock: GetGeoCoordsResponseType = {
  place_id: '1',
  licence: '1',
  osm_type: '1',
  osm_id: '1',
  boundingbox: ['1'],
  lat: '25.5',
  lon: '24.4',
  display_name: 'Moscow, Russia',
  class: '1',
  type: '1',
  importance: 1,
  icon: '1',
};

export const cityNameResponseMock: GetGeoCityNameResponseType = {
  place_id: '1',
  licence: '1',
  osm_type: '1',
  osm_id: '1',
  boundingbox: ['1'],
  lat: '25.5',
  lon: '24.4',
  display_name: 'Moscow, Russia',
  address: {
    city: 'Moscow',
    county: 'Moscow District',
    state: '',
    country: 'Russia',
    counry_code: '05',
  },
};
