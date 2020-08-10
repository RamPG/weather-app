import {
  FETCH_CURRENT_WEATHER_FAILURE,
  FETCH_CURRENT_WEATHER_SUCCESS,
  FETCH_CURRENT_WEATHER_REQUEST,
} from './actions-constants';

import { SubStateType, DataCurrentStateType } from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

function updateWeatherCurrent(state: SubStateType<DataCurrentStateType>, action: ActionTypes) {
  switch (action.type) {
    case FETCH_CURRENT_WEATHER_REQUEST:
      return {
        isLoading: true,
        isError: false,
        data: {},
      };
    case FETCH_CURRENT_WEATHER_FAILURE:
      return {
        isLoading: false,
        isError: true,
        data: {},
      };
    case FETCH_CURRENT_WEATHER_SUCCESS:
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
