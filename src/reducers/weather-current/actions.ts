import { ThunkDispatch } from 'redux-thunk';
import {
  ActionTypes,
  CityWeatherTodayFailureActionType,
  CityWeatherTodayRequestActionType,
  CityWeatherTodaySuccessActionType,
} from '../../types/action-types';
import {
  CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_TODAY_REQUEST,
  CITY_WEATHER_TODAY_SUCCESS,
} from './actions-constants';

import { DataCurrentStateType, InitialStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';

const cityWeatherTodayRequest = (): CityWeatherTodayRequestActionType => ({
  type: CITY_WEATHER_TODAY_REQUEST,
});

const cityWeatherTodayFailure = (): CityWeatherTodayFailureActionType => ({
  type: CITY_WEATHER_TODAY_FAILURE,
});

const cityWeatherTodaySuccess = (
  cityWeatherTodayData: DataCurrentStateType,
): CityWeatherTodaySuccessActionType => ({
  type: CITY_WEATHER_TODAY_SUCCESS,
  payload: cityWeatherTodayData,
});

export const cityWeatherTodayFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: ThunkDispatch<InitialStateType, unknown, ActionTypes>,
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
