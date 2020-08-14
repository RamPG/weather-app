import {
  getNameDay, getNameMonth, addMonthDay,
  addWeekDay, addMonth,
} from '../time-library';
import {
  DataWeatherStateType, TransformedCurrentDataType, TransformedDailyDataType
} from '../../types/state-types';

import {
  GetWeatherResponseType,
  GetGeoCoordsResponseType, GetGeoCityNameResponseType,
} from '../../types/response-types';

type TransformGeoDateType = {
  location: string,
  latitude: number,
  longitude: number,
};

export class WeatherApi {
  _apiKeyWeather: string = 'c0e4dd09360b7cc7634d299c1d2e9790';

  _apiKeyGeo: string = '5ec4c010199d2c';

  _urlWeatherApi = 'https://api.openweathermap.org';

  _urlGeoApi = 'https://eu1.locationiq.com/v1';

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

  transformCurrentData({ current }: GetWeatherResponseType): TransformedCurrentDataType {
    return {
      imgLink: `https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`,
      temp: this.transformKelvinToCelsius(current.temp),
      feelsLike: this.transformKelvinToCelsius(current.feels_like),
      humidity: current.humidity,
      weather: current.weather[0].main,
      windSpeed: current.wind_speed,
    };
  }

  transformDailyData({ daily }: GetWeatherResponseType): Array<TransformedDailyDataType> {
    return daily.map((element, index) => ({
      id: index,
      imgLink: `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
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

  async getResource<T>(url: string): Promise<T> {
    const res = await fetch(
      url,
      {
        method: 'GET',
      },
    );
    if (res.ok) {
      return res.json();
    }
    throw new Error('Error');
  }

  async getCityName(latitude: number, longitude: number): Promise<string> {
    const cityName = await this.getResource<GetGeoCityNameResponseType>(
      `${this._urlGeoApi}/reverse.php?key=${this._apiKeyGeo}&lat=${latitude}&lon=${longitude}&format=json&accept-language=en`,
    );
    return cityName.address.city;
  }

  async getWeather(latitude: number, longitude: number): Promise<DataWeatherStateType> {
    const cityWeather = await this.getResource<GetWeatherResponseType>(
      `${this._urlWeatherApi}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${this._apiKeyWeather}`,
    );
    const current = this.transformCurrentData(cityWeather);
    const daily = this.transformDailyData(cityWeather);
    return {
      current,
      daily,
    };
  }

  async getGeoCoords(cityName: string): Promise<TransformGeoDateType> {
    const geoCityData = await this.getResource<Array<GetGeoCoordsResponseType>>(
      `${this._urlGeoApi}/search.php?key=${this._apiKeyGeo}&q=${cityName}&format=json&accept-language=en`,
    );
    return this.transformCoordsData(geoCityData[0]);
  }
}
