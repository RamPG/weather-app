import fetchMock from 'fetch-mock';
import { WeatherApi } from '../weather-api';
import {
  addMonth, addMonthDay, addWeekDay, getNameDay, getNameMonth,
} from '../../time-library';

describe('Weather api', () => {
  let weatherApi: WeatherApi;
  let mockUrl: string;
  beforeAll(() => {
    weatherApi = new WeatherApi();
    mockUrl = 'https://api.openweathermap.org';
  });
  it('transformKelvinToCelsius return right value', () => {
    expect(weatherApi.transformKelvinToCelsius(303.15)).toBe('+30°C');
  });
  it('transformCoordsData return right value', () => {
    const data = {
      place_id: '0',
      licence: '0',
      osm_type: '0',
      osm_id: '0',
      boundingbox: ['1', '2'],
      lat: '55.76',
      lon: '55.94',
      display_name: 'Moscow City, Russia',
      class: '1',
      type: '2',
      importance: 0.37,
      icon: 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png',
    };
    const transformedData = {
      location: 'Moscow City',
      latitude: 55.76,
      longitude: 55.94,
    };
    expect(weatherApi.transformCoordsData(data)).toStrictEqual(transformedData);
  });
  /* it('transformCurrentData return right value', () => {
    const data = {
      lat: 57.5,
      lon: 53.5,
      timezone: 'Moscow',
      timezone_offset: 10800,
      current: {
        dt: 1,
        sunrise: 1,
        sunset: 1,
        temp: 5,
        feels_like: 7,
        pressure: 1,
        humidity: 75,
        dew_point: 1,
        uvi: 1,
        clouds: 1,
        visibility: 1,
        wind_speed: 35,
        wind_deg: 1,
        weather: [
          {
            id: 0,
            main: 'cloud',
            icon: '03d',
          },
        ],
      },
    };
    const transformedData = {
      imgLink: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`,
      temp: weatherApi.transformKelvinToCelsius(data.current.temp),
      feelsLike: weatherApi.transformKelvinToCelsius(data.current.feels_like),
      humidity: data.current.humidity,
      weather: data.current.weather[0].main,
      windSpeed: data.current.wind_speed,
    };
    expect(weatherApi.transformCurrentData(data)).toStrictEqual(transformedData);
  });
  it('transformDailyData return right value', () => {
    const data = {
      lat: 55.5,
      lon: 55.5,
      timezone: 'Moscow',
      timezone_offset: 10800,
      daily: [{
        dt: 5,
        sunrise: 5,
        sunset: 5,
        temp: {
          day: 23,
          min: 21,
          max: 25,
          night: 23,
          eve: 21,
          morn: 19,
        },
        feels_like: {
          day: 25,
          night: 34,
          eve: 21,
          morn: 23,
        },
        pressure: 1,
        humidity: 55,
        dew_point: 1,
        wind_speed: 3.4,
        wind_deg: 25,
        weather: [
          {
            id: 0,
            main: 'cloud',
            icon: '03d',
          },
        ],
        clouds: 5,
        pop: 5,
        rain: 5,
        uvi: 5,
      }],
    };
    const transformedData = data.daily.map((element, index) => ({
      id: index,
      imgLink: `https://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`,
      weekDayName: getNameDay(addWeekDay(index)),
      monthDay: addMonthDay(index),
      monthDayName: getNameMonth(addMonth(index)),
      temp: {
        day: weatherApi.transformKelvinToCelsius(element.temp.day),
        night: weatherApi.transformKelvinToCelsius(element.temp.night),
      },
      weather: element.weather[0].main,
    }));
    expect(weatherApi.transformDailyData(data)).toStrictEqual(transformedData);
  });
  it('getResourceWeather return success api data', () => {
    fetchMock.get(mockUrl, {
      data: 'something',
    });
    return weatherApi.getResource(mockUrl)
      .then((data) => {
        expect(data).toStrictEqual({ data: 'something' });
      });
  });
  */
});
