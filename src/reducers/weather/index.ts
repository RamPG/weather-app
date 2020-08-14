import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
} from './actions-constants';

import {DataWeatherStateType, SubStateType} from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

function updateWeather(state: SubStateType<DataWeatherStateType>, action: ActionTypes) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        isLoading: true,
        isError: false,
        data: {},
      };
    case FETCH_WEATHER_FAILURE:
      return {
        isLoading: false,
        isError: true,
        data: {},
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

export { updateWeather };
