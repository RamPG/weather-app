import { DataCoordsStateType, TransformedCurrentDataType, TransformedDailyDataType } from '../types/state-types';

export const transformedDataCoords: DataCoordsStateType = {
  location: 'Moscow',
  latitude: 25.5,
  longitude: 24.4,
};

export const transformedDataCurrent: TransformedCurrentDataType = {
  imgLink: 'https://openweathermap.org/img/wn/04n@2x.png',
  temp: '-249°C',
  feelsLike: '-251°C',
  humidity: 50,
  weather: 'Clouds',
  windSpeed: 34,
};

export const transformedDataDaily: Array<TransformedDailyDataType> = [
  {
    id: 0,
    imgLink: 'https://openweathermap.org/img/wn/04n@2x.png',
    weekDayName: 'Friday',
    monthDay: 14,
    monthDayName: 'August',
    temp: {
      day: '-249°C',
      night: '-259°C',
    },
    weather: 'Clouds',
  },
];
