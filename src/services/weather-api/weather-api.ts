import {
  getNameDay, getNameMonth, addMonthDay,
  addWeekDay, addMonth,
} from '../time-library';
import {
  DataDailyStateType, DataCurrentStateType,
} from '../../types/state-types';

import {
  GetWeatherDataSevenDaysResponseType, GetWeatherDataTodayResponseType,
  GetGeoCoordsResponseType,
} from '../../types/response-types';

type TransformGeoDateType = {
  location: string,
  latitude: number,
  longitude: number,
};

export class WeatherApi {
  private apiKeyWeather: string = 'c0e4dd09360b7cc7634d299c1d2e9790';

  private apiKeyGeo: string = '5ec4c010199d2c';

  weatherImg = {
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
  };

  private static transformKelvinToCelsius(tempKelvin: number): string {
    const tempCelsius = Math.floor(tempKelvin - 273.15);
    return tempCelsius > 0 ? `+${tempCelsius}°C` : `${tempCelsius}°C`;
  }

  private transformData({ display_name, lat, lon }: GetGeoCoordsResponseType): TransformGeoDateType {
    return {
      location: display_name.split(', ')[0],
      latitude: Number(lat),
      longitude: Number(lon),
    };
  }

  private static transformTodayData({ current }: GetWeatherDataTodayResponseType): DataCurrentStateType {
    return {
      imgLink: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      temp: WeatherApi.transformKelvinToCelsius(current.temp),
      feelsLike: WeatherApi.transformKelvinToCelsius(current.feels_like),
      humidity: current.humidity,
      weather: current.weather[0].main,
      windSpeed: current.wind_speed,
    };
  }

  private static transformSevenDaysData({ daily }: GetWeatherDataSevenDaysResponseType): Array<DataDailyStateType> {
    return daily.map((element, index) => ({
      id: index,
      imgLink: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
      weekDayName: getNameDay(addWeekDay(index)),
      monthDay: addMonthDay(index),
      monthDayName: getNameMonth(addMonth(index)),
      temp: {
        day: WeatherApi.transformKelvinToCelsius(element.temp.day),
        night: WeatherApi.transformKelvinToCelsius(element.temp.night),
      },
      weather: element.weather[0].main,
    }));
  }

  async getResourceWeather<T>(
    latitude: number, longitude: number, interval: string,
  ): Promise<T> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${interval}&appid=${this.apiKeyWeather}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getResourceGeo<T>(cityName: string): Promise<T> {
    const url = `https://eu1.locationiq.com/v1/search.php?key=${this.apiKeyGeo}&q=${cityName}&format=json&accept-language=en`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getWeatherDataToday(latitude: number, longitude: number): Promise<DataCurrentStateType> {
    const cityWeatherToday = await this.getResourceWeather<GetWeatherDataTodayResponseType>(
      latitude, longitude, 'hourly,daily',
    );
    return WeatherApi.transformTodayData(cityWeatherToday);
  }

  async getWeatherDataSevenDays(latitude: number, longitude: number): Promise<Array<DataDailyStateType>> {
    const cityWeatherSevenDays = await this.getResourceWeather<GetWeatherDataSevenDaysResponseType>(
      latitude, longitude, 'current,hourly',
    );
    return WeatherApi.transformSevenDaysData(cityWeatherSevenDays);
  }

  async getGeoCity(cityName: string): Promise<TransformGeoDateType> {
    const geoCityData = await this.getResourceGeo<Array<GetGeoCoordsResponseType>>(cityName);
    return this.transformData(geoCityData[0]);
  }
}
