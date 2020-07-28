import { CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE } from '../actions/actions-constant';

const initialState = {
  loading: true,
  error: null,
  cityId: 0,
  current: {},
  daily: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER_TODAY_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CITY_WEATHER_TODAY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CITY_WEATHER_TODAY_SUCCESS:
      return {
        ...state,
        current: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
