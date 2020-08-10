import { ThunkDispatch } from 'redux-thunk';
import {
  ActionTypes,
  CityWeatherSevenDaysFailureActionType,
  CityWeatherSevenDaysRequestActionType,
  CityWeatherSevenDaysSuccessActionType,
} from '../../types/action-types';
import {
  CITY_WEATHER_SEVEN_DAYS_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST,
  CITY_WEATHER_SEVEN_DAYS_SUCCESS,
} from './actions-constants'
import { DataDailyStateType, InitialStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';

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

export const cityWeatherSevenDaysFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: ThunkDispatch<InitialStateType, unknown, ActionTypes>,
) => {
  dispatch(cityWeatherSevenDaysRequest());
  weatherApi.getWeatherDaily(latitude, longitude)
    .then((data: Array<DataDailyStateType>) => {
      dispatch(cityWeatherSevenDaysSuccess(data));
    })
    .catch(() => {
      dispatch(cityWeatherSevenDaysFailure());
    });
};
