import {
  CITY_WEATHER_TODAY_FAILURE, CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS,
} from '../actions/actions-constant';

import { SubStateType, DataCurrentStateType } from '../types/state-types';

import { ActionTypes } from "../types/action-types";

function updateWeatherCurrent(state: SubStateType<DataCurrentStateType>, action: ActionTypes) {
  switch (action.type) {
    case CITY_WEATHER_TODAY_REQUEST:
      return {
        isLoading: true,
        isError: false,
        data: {},
      };
    case CITY_WEATHER_TODAY_FAILURE:
      return {
        isLoading: false,
        isError: true,
        data: {},
      };
    case CITY_WEATHER_TODAY_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

export { updateWeatherCurrent };
