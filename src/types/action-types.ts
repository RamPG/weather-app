import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
} from '../reducers/weather-current/actions-constants';

import {
  CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS, CITY_WEATHER_SEVEN_DAYS_FAILURE,
} from '../reducers/weather-daily/actions-constants';
import {
  CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS, CITY_CHANGE_FAILURE,
} from '../reducers/weather-coords/actions-constants';

import {
  DataCurrentStateType, DataCoordsStateType, DataDailyStateType,
} from './state-types';

export type CityWeatherTodayRequestActionType = {
    type: typeof CITY_WEATHER_TODAY_REQUEST,
};

export type CityWeatherTodayFailureActionType = {
    type: typeof CITY_WEATHER_TODAY_FAILURE,
};

export type CityWeatherTodaySuccessActionType = {
    type: typeof CITY_WEATHER_TODAY_SUCCESS,
    payload: DataCurrentStateType,
};

export type CityWeatherSevenDaysRequestActionType = {
    type: typeof CITY_WEATHER_SEVEN_DAYS_REQUEST,
};

export type CityWeatherSevenDaysFailureActionType = {
    type: typeof CITY_WEATHER_SEVEN_DAYS_FAILURE,
};

export type CityWeatherSevenDaysSuccessActionType = {
    type: typeof CITY_WEATHER_SEVEN_DAYS_SUCCESS,
    payload: Array<DataDailyStateType>,
};

export type CityChangeRequestActionType = {
    type: typeof CITY_CHANGE_REQUEST,
};

export type CityChangeFailureActionType = {
    type: typeof CITY_CHANGE_FAILURE,
};

export type CityChangeSuccessActionType = {
    type: typeof CITY_CHANGE_SUCCESS,
    payload: DataCoordsStateType,
};

export type CityChangeActionsType =
    CityChangeRequestActionType | CityChangeFailureActionType | CityChangeSuccessActionType;

export type CityWeatherSevenDaysActionsType =
    CityWeatherSevenDaysRequestActionType | CityWeatherSevenDaysFailureActionType | CityWeatherSevenDaysSuccessActionType;

export type CityWeatherTodayActionsType =
    CityWeatherTodayRequestActionType | CityWeatherTodayFailureActionType | CityWeatherTodaySuccessActionType;

export type ActionTypes = CityChangeActionsType | CityWeatherSevenDaysActionsType | CityWeatherTodayActionsType;
