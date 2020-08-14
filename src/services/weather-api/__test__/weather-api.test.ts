import fetchMock from 'fetch-mock';
import { WeatherApi } from '../weather-api';
import { coordsResponseMock, weatherResponseMock } from '../../../__mocks__/responses';
import {
  transformedDataCoords,
  transformedDataCurrent,
  transformedDataDaily,
} from '../../../__mocks__/transformed-data';

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
    expect(weatherApi.transformCoordsData(coordsResponseMock)).toStrictEqual(transformedDataCoords);
  });
  it('transformCurrentData return right value', () => {
    expect(weatherApi.transformCurrentData(weatherResponseMock)).toStrictEqual(transformedDataCurrent);
  });
  it('transformDailyData return right value', () => {
    expect(weatherApi.transformDailyData(weatherResponseMock, new Date(2020, 7, 14)))
      .toStrictEqual(transformedDataDaily);
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
});
