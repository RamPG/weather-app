import { TimeLibrary } from '../time-library';
import {
  DataDailyStateType, DataCurrentStateType,
} from '../../types/state-types';

import {
  GetWeatherDataSevenDaysResponseType, GetWeatherDataTodayResponseType,
} from '../../types/response-types';

export class WeatherAPI {
  private apiKey: string = 'c0e4dd09360b7cc7634d299c1d2e9790';

  private weatherImg = {
    Thunderstorm: 'http://openweathermap.org/img/wn/11d@2x.png',
    Drizzle: 'http://openweathermap.org/img/wn/09d@2x.png',
    Rain: 'http://openweathermap.org/img/wn/10d@2x.png',
    Snow: 'http://openweathermap.org/img/wn/13d@2x.png',
    Mist: 'http://openweathermap.org/img/wn/50d@2x.png',
    Smoke: 'http://openweathermap.org/img/wn/50d@2x.png',
    Haze: 'http://openweathermap.org/img/wn/50d@2x.png',
    Fog: 'http://openweathermap.org/img/wn/50d@2x.png',
    Sand: 'http://openweathermap.org/img/wn/50d@2x.png',
    Dust: 'http://openweathermap.org/img/wn/50d@2x.png',
    Ash: 'http://openweathermap.org/img/wn/50d@2x.png',
    Squall: 'http://openweathermap.org/img/wn/50d@2x.png',
    Tornado: 'http://openweathermap.org/img/wn/50d@2x.png',
    Clear: 'http://openweathermap.org/img/wn/01d@2x.png',
    Clouds: 'http://openweathermap.org/img/wn/02d@2x.png',
  }

  private static transformKelvinToCelsius(tempKelvin: number): string {
    const tempCelsius = Math.floor(tempKelvin - 273.15);
    return tempCelsius > 0 ? `+${tempCelsius}°C` : `${tempCelsius}°C`;
  }

  private static transformTodayData({ current }: GetWeatherDataTodayResponseType): DataCurrentStateType {
    return {
      imgLink: '',
      temp: WeatherAPI.transformKelvinToCelsius(current.temp),
      feelsLike: WeatherAPI.transformKelvinToCelsius(current.feels_like),
      humidity: current.humidity,
      weather: current.weather[0].main,
      windSpeed: current.wind_speed,
    };
  }

  private static transformSevenDaysData({ daily }: GetWeatherDataSevenDaysResponseType): Array<DataDailyStateType> {
    return daily.map((element, index) => ({
      id: index,
      imgLink: '',
      weekDayName: TimeLibrary.getNameDay(TimeLibrary.addWeekDay(index)),
      monthDay: TimeLibrary.addMonthDay(index),
      monthDayName: TimeLibrary.getNameMonth(TimeLibrary.addMonth(index)),
      temp: {
        day: WeatherAPI.transformKelvinToCelsius(element.temp.day),
        night: WeatherAPI.transformKelvinToCelsius(element.temp.night),
      },
      weather: element.weather[0].main,
    }));
  }

  async getResource<T>(
    latitude: number, longitude: number, interval: string,
  ): Promise<T> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${interval}&appid=${this.apiKey}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getWeatherDataToday(latitude: number, longitude: number): Promise<DataCurrentStateType> {
    const cityWeatherToday = await this.getResource<GetWeatherDataTodayResponseType>(
      latitude, longitude, 'hourly,daily',
    );
    return WeatherAPI.transformTodayData(cityWeatherToday);
  }

  async getWeatherDataSevenDays(latitude: number, longitude: number): Promise<Array<DataDailyStateType>> {
    const cityWeatherSevenDays = await this.getResource<GetWeatherDataSevenDaysResponseType>(
      latitude, longitude, 'current,hourly',
    );
    return WeatherAPI.transformSevenDaysData(cityWeatherSevenDays);
  }
}
