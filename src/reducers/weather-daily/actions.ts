import {
  FetchDailyWeatherFailureActionType,
  FetchDailyWeatherRequestActionType,
  FetchDailyWeatherSuccessActionType,
  DispatchType,
} from '../../types/action-types';
import {
  FETCH_DAILY_WEATHER_FAILURE,
  FETCH_DAILY_WEATHER_SUCCESS,
  FETCH_DAILY_WEATHER_REQUEST,
} from './actions-constants';
import { DataDailyStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';

const cityWeatherSevenDaysRequest = (): FetchDailyWeatherRequestActionType => ({
  type: FETCH_DAILY_WEATHER_REQUEST,
});

const cityWeatherSevenDaysFailure = (): FetchDailyWeatherFailureActionType => ({
  type: FETCH_DAILY_WEATHER_FAILURE,
});

const cityWeatherSevenDaysSuccess = (
  cityWeatherTodayData: Array<DataDailyStateType>,
): FetchDailyWeatherSuccessActionType => ({
  type: FETCH_DAILY_WEATHER_SUCCESS,
  payload: cityWeatherTodayData,
});

export const cityWeatherSevenDaysFetch = (weatherApi: WeatherApi, latitude: number, longitude: number) => (
  dispatch: DispatchType,
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
