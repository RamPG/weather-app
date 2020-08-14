import fetchMock from 'fetch-mock';
import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from '../actions-constants';
import { cityWeatherFailure, cityWeatherFetch, cityWeatherRequest } from '../actions';
import { WeatherApi } from '../../../services/weather-api';
import { transformedDataCoords, transformedDataCurrent, transformedDataDaily } from '../../../__mocks__/transformed-data';
import { weatherResponseMock } from '../../../__mocks__/responses';
import { DataWeatherStateType } from '../../../types/state-types';
import { DispatchType } from '../../../types/action-types';

const mockStore = createMockStore<DataWeatherStateType, DispatchType>([thunk]);

describe('Weather actions test', () => {
  describe('Sync actions', () => {
    it('cityWeatherRequest return right data', () => {
      const expectedAction = {
        type: FETCH_WEATHER_REQUEST,
      };
      expect(cityWeatherRequest()).toStrictEqual(expectedAction);
    });
    it('cityWeatherFailure return right data', () => {
      const expectedAction = {
        type: FETCH_WEATHER_FAILURE,
      };
      expect(cityWeatherFailure()).toStrictEqual(expectedAction);
    });
  });
  describe('Async actions', () => {
    let weatherApi: WeatherApi;
    let urlWeather: string;
    let apiKeyWeather: string;
    beforeAll(() => {
      weatherApi = new WeatherApi();
      urlWeather = weatherApi._urlWeatherApi;
      apiKeyWeather = weatherApi._apiKeyWeather;
    });
    beforeEach(() => {
      fetchMock.getOnce(
        `${urlWeather}/data/2.5/onecall?lat=${transformedDataCoords.latitude}&lon=${transformedDataCoords.longitude}&exclude=hourly,minutely&appid=${apiKeyWeather}`,
        weatherResponseMock,
      );
    });
    afterEach(() => {
      fetchMock.reset();
    });
    it('cityWeatherFetch use necessary actions', () => {
      const expectedActions: Array<object> = [
        { type: FETCH_WEATHER_REQUEST },
        {
          type: FETCH_WEATHER_SUCCESS,
          payload: {
            daily: transformedDataDaily,
            current: transformedDataCurrent,
          },
        },
      ];
      const store = mockStore();
      return store.dispatch(cityWeatherFetch(weatherApi, transformedDataCoords.latitude, transformedDataCoords.longitude))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
