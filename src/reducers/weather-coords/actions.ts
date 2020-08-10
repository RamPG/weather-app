import { ThunkDispatch } from 'redux-thunk';
import {
  ActionTypes,
  CityChangeFailureActionType,
  CityChangeRequestActionType,
  CityChangeSuccessActionType,
} from '../../types/action-types';
import { CITY_CHANGE_FAILURE, CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS } from './actions-constants';
import { DataCoordsStateType, InitialStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';
import { cityWeatherTodayFetch } from '../weather-current/actions';
import { cityWeatherSevenDaysFetch } from '../weather-daily/actions';

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
  dispatch: ThunkDispatch<InitialStateType, unknown, ActionTypes>,
) => {
  dispatch(cityChangeRequest());
  weatherApi.getWeatherCoords(location)
    .then((data: DataCoordsStateType) => {
      dispatch(cityChangeSuccess(data));
      dispatch(cityWeatherSevenDaysFetch(weatherApi, data.latitude, data.longitude));
      dispatch(cityWeatherTodayFetch(weatherApi, data.latitude, data.longitude));
    })
    .catch(() => {
      dispatch(cityChangeFailure());
    });
};
