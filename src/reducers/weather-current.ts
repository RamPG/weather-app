import {
  CITY_WEATHER_TODAY_FAILURE, CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS,
} from '../actions/actions-constant';

import { SubStateType, DataCurrentStateType } from '../types/state-types';

function updateWeatherCurrent(state: SubStateType<DataCurrentStateType>, action: any) {
  switch (action.type) {
    case CITY_WEATHER_TODAY_REQUEST:
      return {
        loading: true,
        error: false,
        data: {},
      };
    case CITY_WEATHER_TODAY_FAILURE:
      return {
        loading: false,
        error: true,
        data: {},
      };
    case CITY_WEATHER_TODAY_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

export { updateWeatherCurrent };
