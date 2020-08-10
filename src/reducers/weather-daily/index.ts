import {
  CITY_WEATHER_SEVEN_DAYS_FAILURE, CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS,
} from './actions-constants';

import {
  SubStateType, DataDailyStateType,
} from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

function updateWeatherDaily(state: SubStateType<Array<DataDailyStateType>>, action: ActionTypes) {
  switch (action.type) {
    case CITY_WEATHER_SEVEN_DAYS_REQUEST:
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    case CITY_WEATHER_SEVEN_DAYS_FAILURE:
      return {
        isLoading: false,
        isError: false,
        data: [],
      };
    case CITY_WEATHER_SEVEN_DAYS_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

export { updateWeatherDaily };
