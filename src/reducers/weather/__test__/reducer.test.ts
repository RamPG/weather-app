import { weatherReducer } from '../index';
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
} from '../actions-constants';
import { DataWeatherStateType, SubStateType } from '../../../types/state-types';
import {
  FetchWeatherFailureActionType,
  FetchWeatherRequestActionType,
  FetchWeatherSuccessActionType,
} from '../../../types/action-types';
import { transformedDataCurrent, transformedDataDaily } from '../../../__mocks__/transformed-data';

describe('Weather reducer', () => {
  let initialState: SubStateType<DataWeatherStateType>;
  beforeAll(() => {
    initialState = {
      isLoading: false,
      isError: false,
      data: {
        daily: [],
        current: {
          imgLink: '',
          temp: '',
          feelsLike: '',
          humidity: 0,
          weather: '',
          windSpeed: 0,
        },
      },
    };
  });
  it('FETCH_WEATHER_REQUEST action return loading true', () => {
    const action: FetchWeatherRequestActionType = {
      type: FETCH_WEATHER_REQUEST,
    };
    expect(weatherReducer(initialState, action)).toStrictEqual({
      ...initialState,
      isLoading: true,
      isError: false,
    });
  });
  it('FETCH_WEATHER_FAILURE action return error true', () => {
    const action: FetchWeatherFailureActionType = {
      type: FETCH_WEATHER_FAILURE,
    };
    expect(weatherReducer(initialState, action)).toStrictEqual({
      ...initialState,
      isLoading: false,
      isError: true,
    });
  });
  it('FETCH_WEATHER_SUCCESS action return data', () => {
    const action: FetchWeatherSuccessActionType = {
      type: FETCH_WEATHER_SUCCESS,
      payload: {
        daily: transformedDataDaily,
        current: transformedDataCurrent,
      },
    };
    expect(weatherReducer(initialState, action)).toStrictEqual({
      isLoading: false,
      isError: false,
      data: {
        daily: transformedDataDaily,
        current: transformedDataCurrent,
      },
    });
  });
});
