import { ThunkDispatch } from 'redux-thunk';
import {
  CHANGE_COORDS_FAILURE,
  CHANGE_COORDS_REQUEST,
  CHANGE_COORDS_SUCCESS,
} from '../reducers/coords/actions-constants';

import {
    FETCH_WEATHER_FAILURE,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_REQUEST,
} from '../reducers/weather/actions-constants';

import {
  DataCoordsStateType, DataWeatherStateType, InitialStateType,
} from './state-types';

export type FetchWeatherRequestActionType = {
    type: typeof FETCH_WEATHER_REQUEST,
};

export type FetchWeatherFailureActionType = {
    type: typeof FETCH_WEATHER_FAILURE,
};

export type FetchWeatherSuccessActionType = {
    type: typeof FETCH_WEATHER_SUCCESS,
    payload: DataWeatherStateType,
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

export type FetchWeatherActionsType =
    FetchWeatherRequestActionType | FetchWeatherFailureActionType | FetchWeatherSuccessActionType;

export type ActionTypes = ChangeCoordsActionsType | FetchWeatherActionsType;

export type DispatchType = ThunkDispatch<InitialStateType, unknown, ActionTypes>;
