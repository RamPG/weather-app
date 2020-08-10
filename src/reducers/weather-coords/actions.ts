import {
  ChangeCoordsFailureActionType,
  ChangeCoordsRequestActionType,
  ChangeCoordsSuccessActionType,
  DispatchType,
} from '../../types/action-types';
import { CHANGE_COORDS_FAILURE, CHANGE_COORDS_REQUEST, CHANGE_COORDS_SUCCESS } from './actions-constants';
import { DataCoordsStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';
import { cityWeatherTodayFetch } from '../weather-current/actions';
import { cityWeatherSevenDaysFetch } from '../weather-daily/actions';

const changeCoordsRequest = (): ChangeCoordsRequestActionType => ({
  type: CHANGE_COORDS_REQUEST,
});

const changeCoordsFailure = (): ChangeCoordsFailureActionType => ({
  type: CHANGE_COORDS_FAILURE,
});

const changeCoordsSuccess = (
  cityChangeCoords: DataCoordsStateType,
): ChangeCoordsSuccessActionType => ({
  type: CHANGE_COORDS_SUCCESS,
  payload: cityChangeCoords,
});
const changeCoords = (weatherApi: WeatherApi, location: string) => (
  dispatch: DispatchType,
) => {
  localStorage.setItem('city', location);
  weatherApi.getCoords(location)
    .then((data: DataCoordsStateType) => {
      dispatch(changeCoordsSuccess(data));
      dispatch(cityWeatherSevenDaysFetch(weatherApi, data.latitude, data.longitude));
      dispatch(cityWeatherTodayFetch(weatherApi, data.latitude, data.longitude));
    })
    .catch(() => {
      dispatch(changeCoordsFailure());
    });
};
export const changeCoordsByForm = (weatherApi: WeatherApi, location: string) => (
  dispatch: DispatchType,
) => {
  dispatch(changeCoordsRequest());
  dispatch(changeCoords(weatherApi, location));
};

export const changeCoordsByBrowserNavigator = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: DispatchType,
) => {
  dispatch(changeCoordsRequest());
  weatherApi.getCityName(latitude, longitude)
    .then(({ address }) => {
      dispatch(changeCoords(weatherApi, address.city));
    })
    .catch(() => {
      dispatch(changeCoordsFailure());
    });
};
