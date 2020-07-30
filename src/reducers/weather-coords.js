import {
  CITY_CHANGE_FAILURE,
  CITY_CHANGE_REQUEST,
  CITY_CHANGE_SUCCESS,
} from '../actions/actions-constant';

function updateWeatherCoords(state, action) {
  switch (action.type) {
    case CITY_CHANGE_REQUEST:
      return {
        ...state.coords,
        loading: true,
        error: null,
      };
    case CITY_CHANGE_FAILURE:
      return {
        ...state.coords,
        loading: false,
        error: action.payload,
      };
    case CITY_CHANGE_SUCCESS:
      return {
        loading: false,
        error: null,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
      };
    default:
      return state.coords;
  }
}

export default updateWeatherCoords;
