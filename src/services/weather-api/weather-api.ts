import {
  getNameDay, getNameMonth, addMonthDay,
  addWeekDay, addMonth,
} from '../time-library';
import {
  DataDailyStateType, DataCurrentStateType,
} from '../../types/state-types';

import {
  GetWeatherDataSevenDaysResponseType, GetWeatherDataTodayResponseType,
  GetGeoCoordsResponseType, GetGeoCityNameResponseType,
} from '../../types/response-types';

type TransformGeoDateType = {
  location: string,
  latitude: number,
  longitude: number,
};

export class WeatherApi {
  private _apiKeyWeather: string = 'c0e4dd09360b7cc7634d299c1d2e9790';

  private _apiKeyGeo: string = '5ec4c010199d2c';

  transformKelvinToCelsius(tempKelvin: number): string {
    const tempCelsius = Math.floor(tempKelvin - 273.15);
    return tempCelsius > 0 ? `+${tempCelsius}°C` : `${tempCelsius}°C`;
  }

  transformCoordsData({ display_name, lat, lon }: GetGeoCoordsResponseType): TransformGeoDateType {
    return {
      location: display_name.split(', ')[0],
      latitude: Number(lat),
      longitude: Number(lon),
    };
  }

  transformCurrentData({ current }: GetWeatherDataTodayResponseType): DataCurrentStateType {
    return {
      imgLink: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      temp: this.transformKelvinToCelsius(current.temp),
      feelsLike: this.transformKelvinToCelsius(current.feels_like),
      humidity: current.humidity,
      weather: current.weather[0].main,
      windSpeed: current.wind_speed,
    };
  }

  transformDailyData({ daily }: GetWeatherDataSevenDaysResponseType): Array<DataDailyStateType> {
    return daily.map((element, index) => ({
      id: index,
      imgLink: `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
      weekDayName: getNameDay(addWeekDay(index)),
      monthDay: addMonthDay(index),
      monthDayName: getNameMonth(addMonth(index)),
      temp: {
        day: this.transformKelvinToCelsius(element.temp.day),
        night: this.transformKelvinToCelsius(element.temp.night),
      },
      weather: element.weather[0].main,
    }));
  }

  async getResourceWeather<T>(
    latitude: number, longitude: number, interval: string,
  ): Promise<T> {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${interval}&appid=${this._apiKeyWeather}`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getResourceGeo<T>(cityName: string): Promise<T> {
    const url = `https://eu1.locationiq.com/v1/search.php?key=${this._apiKeyGeo}&q=${cityName}&format=json&accept-language=en`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getCityName(latitude: number, longitude: number): Promise<GetGeoCityNameResponseType> {
    const url = `https://us1.locationiq.com/v1/reverse.php?key=${this._apiKeyGeo}&lat=${latitude}&lon=${longitude}&format=json&accept-language=en`;
    const res = await fetch(url);
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getWeatherCurrent(latitude: number, longitude: number): Promise<DataCurrentStateType> {
    const cityWeatherToday = await this.getResourceWeather<GetWeatherDataTodayResponseType>(
      latitude, longitude, 'hourly,daily',
    );
    return this.transformCurrentData(cityWeatherToday);
  }

  async getWeatherDaily(latitude: number, longitude: number): Promise<Array<DataDailyStateType>> {
    const cityWeatherSevenDays = await this.getResourceWeather<GetWeatherDataSevenDaysResponseType>(
      latitude, longitude, 'current,hourly',
    );
    return this.transformDailyData(cityWeatherSevenDays);
  }

  async getCoords(cityName: string): Promise<TransformGeoDateType> {
    const geoCityData = await this.getResourceGeo<Array<GetGeoCoordsResponseType>>(cityName);
    return this.transformCoordsData(geoCityData[0]);
  }
}
