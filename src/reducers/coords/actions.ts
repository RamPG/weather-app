import {
  ChangeCoordsFailureActionType,
  ChangeCoordsRequestActionType,
  ChangeCoordsSuccessActionType,
  DispatchType,
} from '../../types/action-types';
import {
  CHANGE_COORDS_FAILURE,
  CHANGE_COORDS_REQUEST,
  CHANGE_COORDS_SUCCESS,
} from './actions-constants';
import { DataCoordsStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';
import { cityWeatherFetch } from '../weather/actions';

export const changeCoordsRequest = (): ChangeCoordsRequestActionType => ({
  type: CHANGE_COORDS_REQUEST,
});

export const changeCoordsFailure = (): ChangeCoordsFailureActionType => ({
  type: CHANGE_COORDS_FAILURE,
});

export const changeCoordsSuccess = (
  cityChangeCoords: DataCoordsStateType,
): ChangeCoordsSuccessActionType => ({
  type: CHANGE_COORDS_SUCCESS,
  payload: cityChangeCoords,
});

export const changeCoords = (weatherApi: WeatherApi, location: string) => (
  dispatch: DispatchType,
) => {
  localStorage.setItem('city', location);
  dispatch(changeCoordsRequest());
  return weatherApi.getGeoCoords(location)
    .then((data: DataCoordsStateType) => {
      dispatch(changeCoordsSuccess(data));
      dispatch(cityWeatherFetch(weatherApi, data.latitude, data.longitude));
    })
    .catch(() => {
      dispatch(changeCoordsFailure());
    });
};

export const changeCoordsByBrowserNavigator = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: DispatchType,
) => {
  return weatherApi.getCityName(latitude, longitude)
    .then((cityName) => {
      dispatch(changeCoords(weatherApi, cityName));
    })
    .catch(() => {
      dispatch(changeCoordsFailure());
    });
};
