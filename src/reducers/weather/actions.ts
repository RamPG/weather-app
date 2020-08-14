import {
  FetchWeatherSuccessActionType,
  FetchWeatherFailureActionType,
  FetchWeatherRequestActionType,
  DispatchType,
} from '../../types/action-types';
import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
} from './actions-constants';

import { DataWeatherStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';

const cityWeatherRequest = (): FetchWeatherRequestActionType => ({
  type: FETCH_WEATHER_REQUEST,
});

const cityWeatherFailure = (): FetchWeatherFailureActionType => ({
  type: FETCH_WEATHER_FAILURE,
});

const cityWeatherSuccess = (
  cityWeatherData: DataWeatherStateType,
): FetchWeatherSuccessActionType => ({
  type: FETCH_WEATHER_SUCCESS,
  payload: cityWeatherData,
});

export const cityWeatherFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: DispatchType,
) => {
  dispatch(cityWeatherRequest());
  return weatherApi.getWeather(latitude, longitude)
    .then((data: DataWeatherStateType) => {
      dispatch(cityWeatherSuccess(data));
    })
    .catch(() => {
      dispatch(cityWeatherFailure());
    });
};
