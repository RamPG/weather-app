import {
  CITY_WEATHER_SEVEN_DAYS_FAILURE, CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS,
} from '../actions/actions-constant';

import { DailyStateType } from '../types/state-types';

function updateWeatherDaily(state: DailyStateType, action: any) {
  switch (action.type) {
    case CITY_WEATHER_SEVEN_DAYS_REQUEST:
      return {
        loading: true,
        error: false,
        data: [],
      };
    case CITY_WEATHER_SEVEN_DAYS_FAILURE:
      return {
        loading: false,
        error: false,
        data: [],
      };
    case CITY_WEATHER_SEVEN_DAYS_SUCCESS:
      return {
        loading: false,
        error: false,
        data: action.payload,
      };
    default:
      return state;
  }
}

export { updateWeatherDaily };
