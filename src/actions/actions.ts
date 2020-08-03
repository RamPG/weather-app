import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS, CITY_WEATHER_SEVEN_DAYS_FAILURE,
  CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS, CITY_CHANGE_FAILURE,
} from './actions-constant';

import {
  CityWeatherTodayRequestActionType, CityWeatherTodayFailureActionType, CityWeatherTodaySuccessActionType,
  CityWeatherSevenDaysRequestActionType, CityWeatherSevenDaysFailureActionType, CityWeatherSevenDaysSuccessActionType,
  CityChangeRequestActionType, CityChangeFailureActionType, CityChangeSuccessActionType, ActionTypes,
} from '../types/action-types';

import {
  DataCoordsStateType, DataDailyStateType, DataCurrentStateType,
} from '../types/state-types';

import { WeatherApi } from '../services/weather-api';

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

const cityWeatherTodayFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: Dispatch<ActionTypes>,
) => {
  dispatch(cityWeatherTodayRequest());
  weatherApi.getWeatherDataToday(latitude, longitude)
    .then((data: DataCurrentStateType) => {
      dispatch(cityWeatherTodaySuccess(data));
    })
    .catch(() => {
      dispatch(cityWeatherTodayFailure());
    });
};

const cityWeatherSevenDaysRequest = (): CityWeatherSevenDaysRequestActionType => ({
  type: CITY_WEATHER_SEVEN_DAYS_REQUEST,
});

const cityWeatherSevenDaysFailure = (): CityWeatherSevenDaysFailureActionType => ({
  type: CITY_WEATHER_SEVEN_DAYS_FAILURE,
});

const cityWeatherSevenDaysSuccess = (
  cityWeatherTodayData: Array<DataDailyStateType>,
): CityWeatherSevenDaysSuccessActionType => ({
  type: CITY_WEATHER_SEVEN_DAYS_SUCCESS,
  payload: cityWeatherTodayData,
});

const cityWeatherSevenDaysFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: Dispatch<ActionTypes>,
) => {
  dispatch(cityWeatherSevenDaysRequest());
  weatherApi.getWeatherDataSevenDays(latitude, longitude)
    .then((data: Array<DataDailyStateType>) => {
      dispatch(cityWeatherSevenDaysSuccess(data));
    })
    .catch(() => {
      dispatch(cityWeatherSevenDaysFailure());
    });
};

const cityChangeRequest = (): CityChangeRequestActionType => ({
  type: CITY_CHANGE_REQUEST,
});

const cityChangeFailure = (): CityChangeFailureActionType => ({
  type: CITY_CHANGE_FAILURE,
});

const cityChangeSuccess = (
  cityChangeCoords: DataCoordsStateType,
): CityChangeSuccessActionType => ({
  type: CITY_CHANGE_SUCCESS,
  payload: cityChangeCoords,
});

export const cityChangeCoordsFetch = (weatherApi: WeatherApi, location: string) => (
  dispatch: Dispatch<ActionTypes>,
) => {
  dispatch(cityChangeRequest());
  weatherApi.getGeoCity(location)
    .then((data: DataCoordsStateType) => {
      dispatch(cityChangeSuccess(data));
      // @ts-ignore
      dispatch(cityWeatherSevenDaysFetch(weatherApi, data.latitude, data.longitude));
      // @ts-ignore
      dispatch(cityWeatherTodayFetch(weatherApi, data.latitude, data.longitude));
    })
    .catch(() => {
      dispatch(cityChangeFailure());
    });
};
