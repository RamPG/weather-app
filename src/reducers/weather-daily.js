import {
  CITY_WEATHER_SEVEN_DAYS_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST,
  CITY_WEATHER_SEVEN_DAYS_SUCCESS,
} from '../actions/actions-constant';

function updateWeatherDaily(state, action) {
  switch (action.type) {
    case CITY_WEATHER_SEVEN_DAYS_REQUEST:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case CITY_WEATHER_SEVEN_DAYS_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };
    case CITY_WEATHER_SEVEN_DAYS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state.daily;
  }
}

export default updateWeatherDaily;
