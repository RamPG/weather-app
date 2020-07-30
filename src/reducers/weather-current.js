import {
  CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_TODAY_REQUEST,
  CITY_WEATHER_TODAY_SUCCESS,
} from '../actions/actions-constant';

function updateWeatherCurrent(state, action) {
  switch (action.type) {
    case CITY_WEATHER_TODAY_REQUEST:
      return {
        loading: true,
        error: null,
        data: {},
      };
    case CITY_WEATHER_TODAY_FAILURE:
      return {
        loading: false,
        error: action.payload,
        data: {},
      };
    case CITY_WEATHER_TODAY_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state.current;
  }
}

export default updateWeatherCurrent;
