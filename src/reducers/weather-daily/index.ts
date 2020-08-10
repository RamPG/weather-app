import {
  FETCH_DAILY_WEATHER_FAILURE,
  FETCH_DAILY_WEATHER_SUCCESS,
  FETCH_DAILY_WEATHER_REQUEST,
} from './actions-constants';

import {
  SubStateType, DataDailyStateType,
} from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

function updateWeatherDaily(state: SubStateType<Array<DataDailyStateType>>, action: ActionTypes) {
  switch (action.type) {
    case FETCH_DAILY_WEATHER_REQUEST:
      return {
        isLoading: true,
        isError: false,
        data: [],
      };
    case FETCH_DAILY_WEATHER_FAILURE:
      return {
        isLoading: false,
        isError: false,
        data: [],
      };
    case FETCH_DAILY_WEATHER_SUCCESS:
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
