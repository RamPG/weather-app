import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS, CITY_WEATHER_SEVEN_DAYS_FAILURE,
  CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS, CITY_CHANGE_FAILURE,
} from './actions-constant';

import {
  CityWeatherTodayRequestActionType, CityWeatherTodayFailureActionType, CityWeatherTodaySuccessActionType,
  CityWeatherSevenDaysRequestActionType, CityWeatherSevenDaysFailureActionType, CityWeatherSevenDaysSuccessActionType,
  CityChangeRequestActionType, CityChangeFailureActionType, CityChangeSuccessActionType,
} from '../types/action-types';

import {
  DataCoordsStateType, DataDailyStateType, DataCurrentStateType,
} from '../types/state-types';

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

export const cityWeatherTodayFetch = (weatherApi: any) => (dispatch: any, getState: any) => {
  dispatch(cityWeatherTodayRequest());
  weatherApi.getWeatherDataToday({
    latitude: getState().coords.data.latitude,
    longitude: getState().coords.data.longitude,
  })
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
  cityWeatherTodayData: DataDailyStateType,
): CityWeatherSevenDaysSuccessActionType => ({
  type: CITY_WEATHER_SEVEN_DAYS_SUCCESS,
  payload: cityWeatherTodayData,
});

export const cityWeatherSevenDaysFetch = (weatherApi: any) => (dispatch: any, getState: any) => {
  dispatch(cityWeatherSevenDaysRequest());
  weatherApi.getWeatherDataSevenDays({
    latitude: getState().coords.data.latitude,
    longitude: getState().coords.data.longitude,
  })
    .then((data: DataDailyStateType) => {
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

export const cityChangeCoordsFetch = (geoApi: any, location: any) => (dispatch: any) => {
  dispatch(cityChangeRequest());
  geoApi.getGeoCity(location)
    .then((data: DataCoordsStateType) => {
      dispatch(cityChangeSuccess(data));
    })
    .catch(() => {
      dispatch(cityChangeFailure());
    });
};
