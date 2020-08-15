import {
  DataCoordsStateType,
  DataWeatherStateType,
} from '../../types/state-types';
import { WeatherApi } from './weather-api';

export class WeatherApiConsumer extends WeatherApi {
  async getCityName(latitude: number, longitude: number): Promise<string> {
    const location: string = await 'Moscow';
    return location;
  }

  async getWeather(latitude: number, longitude: number): Promise<DataWeatherStateType> {
    const weather: DataWeatherStateType = await {
      current: {
        imgLink: 'https://openweathermap.org/img/wn/04n@2x.png',
        temp: '-249°C',
        feelsLike: '-251°C',
        humidity: 50,
        weather: 'Clouds',
        windSpeed: 34,
      },
      daily: [{
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
      }],
    };
    return weather;
  }

  async getGeoCoords(cityName: string): Promise<DataCoordsStateType> {
    const coords: DataCoordsStateType = await {
      location: 'Moscow',
      latitude: 25.5,
      longitude: 24.4,
    };
    return coords;
  }
}
