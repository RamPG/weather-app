import { Dispatch } from 'redux';
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
  DataCoordsStateType, DataDailyStateType, DataCurrentStateType, GetStateType,
} from '../types/state-types';

import { GeoApi } from "../services/geo-api";
import { WeatherApi } from "../services/weather-api";

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

export const cityWeatherTodayFetch = (weatherApi: WeatherApi) => (
  dispatch: Dispatch<ActionTypes>, getState: GetStateType,
) => {
  const { latitude, longitude } = getState().coords.data;
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

export const cityWeatherSevenDaysFetch = (weatherApi: WeatherApi) => (
  dispatch: Dispatch<ActionTypes>, getState: GetStateType,
) => {
  const { latitude, longitude } = getState().coords.data;
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

export const cityChangeCoordsFetch = (geoApi: GeoApi, location: string) => (dispatch: Dispatch<ActionTypes>) => {
  dispatch(cityChangeRequest());
  geoApi.getGeoCity(location)
    .then((data: DataCoordsStateType) => {
      dispatch(cityChangeSuccess(data));
    })
    .catch(() => {
      dispatch(cityChangeFailure());
    });
};
