import {
  FetchCurrentWeatherSuccessActionType,
  FetchCurrentWeatherFailureActionType,
  FetchCurrentWeatherRequestActionType,
  DispatchType,
} from '../../types/action-types';
import {
  FETCH_CURRENT_WEATHER_FAILURE,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_REQUEST,
} from './actions-constants';

import { DataCurrentStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';

const cityWeatherTodayRequest = (): FetchCurrentWeatherRequestActionType => ({
  type: FETCH_CURRENT_WEATHER_REQUEST,
});

const cityWeatherTodayFailure = (): FetchCurrentWeatherFailureActionType => ({
  type: FETCH_CURRENT_WEATHER_FAILURE,
});

const cityWeatherTodaySuccess = (
  cityWeatherTodayData: DataCurrentStateType,
): FetchCurrentWeatherSuccessActionType => ({
  type: FETCH_CURRENT_WEATHER_SUCCESS,
  payload: cityWeatherTodayData,
});

export const cityWeatherTodayFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: DispatchType,
) => {
  dispatch(cityWeatherTodayRequest());
  weatherApi.getWeatherCurrent(latitude, longitude)
    .then((data: DataCurrentStateType) => {
      dispatch(cityWeatherTodaySuccess(data));
    })
    .catch(() => {
      dispatch(cityWeatherTodayFailure());
    });
};
