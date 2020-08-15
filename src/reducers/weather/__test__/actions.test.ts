import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from '../actions-constants';
import {
  cityWeatherFailure, cityWeatherFetch, cityWeatherRequest, cityWeatherSuccess,
} from '../actions';
import { WeatherApiConsumer } from '../../../services/weather-api/weather-api-consumer';
import { transformedDataCoords, transformedDataCurrent, transformedDataDaily } from '../../../__mocks__/transformed-data';
import { DataWeatherStateType } from '../../../types/state-types';
import {
  DispatchType, FetchWeatherFailureActionType, FetchWeatherRequestActionType, FetchWeatherSuccessActionType,
} from '../../../types/action-types';
import { WeatherApi } from '../../../services/weather-api';

const mockStore = createMockStore<DataWeatherStateType, DispatchType>([thunk]);

describe('Weather actions test', () => {
  let expectedActionRequest: FetchWeatherRequestActionType;
  let expectedActionSuccess: FetchWeatherSuccessActionType;
  let expectedActionFailute: FetchWeatherFailureActionType;
  beforeAll(() => {
    expectedActionRequest = {
      type: FETCH_WEATHER_REQUEST,
    };
    expectedActionFailute = {
      type: FETCH_WEATHER_FAILURE,
    };
    expectedActionSuccess = {
      type: FETCH_WEATHER_SUCCESS,
      payload: {
        daily: transformedDataDaily,
        current: transformedDataCurrent,
      },
    };
  });
  describe('Sync actions', () => {
    it('cityWeatherRequest return right data', () => {
      expect(cityWeatherRequest()).toStrictEqual(expectedActionRequest);
    });
    it('cityWeatherFailure return right data', () => {
      expect(cityWeatherFailure()).toStrictEqual(expectedActionFailute);
    });
    it('cityWeatherSuccess return right data', () => {
      expect(cityWeatherSuccess({
        daily: transformedDataDaily,
        current: transformedDataCurrent,
      })).toStrictEqual(expectedActionSuccess);
    });
  });
  describe('Async actions', () => {
    let weatherApi: WeatherApi;
    beforeAll(() => {
      weatherApi = new WeatherApiConsumer();
    });
    it('cityWeatherFetch use necessary actions', () => {
      const expectedActions: Array<object> = [
        expectedActionRequest,
        expectedActionSuccess,
      ];
      const store = mockStore();
      return store.dispatch(cityWeatherFetch(weatherApi, transformedDataCoords.latitude, transformedDataCoords.longitude))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
