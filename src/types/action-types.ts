import { ThunkDispatch } from 'redux-thunk';
import {
  CHANGE_COORDS_FAILURE,
  CHANGE_COORDS_REQUEST,
  CHANGE_COORDS_SUCCESS,
} from '../reducers/weather-coords/actions-constants';

import {
  FETCH_DAILY_WEATHER_FAILURE,
  FETCH_DAILY_WEATHER_SUCCESS,
  FETCH_DAILY_WEATHER_REQUEST,
} from '../reducers/weather-daily/actions-constants';
import {
  FETCH_CURRENT_WEATHER_FAILURE,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_REQUEST,
} from '../reducers/weather-current/actions-constants';

import {
  DataCurrentStateType, DataCoordsStateType, DataDailyStateType, InitialStateType,
} from './state-types';

export type FetchCurrentWeatherRequestActionType = {
    type: typeof FETCH_CURRENT_WEATHER_REQUEST,
};

export type FetchCurrentWeatherFailureActionType = {
    type: typeof FETCH_CURRENT_WEATHER_FAILURE,
};

export type FetchCurrentWeatherSuccessActionType = {
    type: typeof FETCH_CURRENT_WEATHER_SUCCESS,
    payload: DataCurrentStateType,
};

export type FetchDailyWeatherRequestActionType = {
    type: typeof FETCH_DAILY_WEATHER_REQUEST,
};

export type FetchDailyWeatherFailureActionType = {
    type: typeof FETCH_DAILY_WEATHER_FAILURE,
};

export type FetchDailyWeatherSuccessActionType = {
    type: typeof FETCH_DAILY_WEATHER_SUCCESS,
    payload: Array<DataDailyStateType>,
};

export type ChangeCoordsRequestActionType = {
    type: typeof CHANGE_COORDS_REQUEST,
};

export type ChangeCoordsFailureActionType = {
    type: typeof CHANGE_COORDS_FAILURE,
};

export type ChangeCoordsSuccessActionType = {
    type: typeof CHANGE_COORDS_SUCCESS,
    payload: DataCoordsStateType,
};

export type ChangeCoordsActionsType =
    ChangeCoordsRequestActionType | ChangeCoordsFailureActionType | ChangeCoordsSuccessActionType;

export type CityWeatherSevenDaysActionsType =
    FetchDailyWeatherSuccessActionType | FetchDailyWeatherRequestActionType | FetchDailyWeatherFailureActionType;

export type FetchCurrentWeatherActionsType =
    FetchCurrentWeatherRequestActionType | FetchCurrentWeatherFailureActionType | FetchCurrentWeatherSuccessActionType;

export type ActionTypes = ChangeCoordsActionsType | CityWeatherSevenDaysActionsType | FetchCurrentWeatherActionsType;

export type DispatchType = ThunkDispatch<InitialStateType, unknown, ActionTypes>;
