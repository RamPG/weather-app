import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS, CITY_WEATHER_SEVEN_DAYS_FAILURE,
} from '../actions/actions-constant';

const initialState = {
  cityId: 1,
  cityName: 'Kiev',
  current: {
    loading: false,
    error: null,
    data: {},
  },
  daily: {
    loading: false,
    error: null,
    data: [],
  },
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CITY_WEATHER_TODAY_REQUEST:
      return {
        ...state,
        current: {
          loading: true,
          error: null,
          data: {},
        },
      };
    case CITY_WEATHER_TODAY_FAILURE:
      return {
        ...state,
        current: {
          loading: false,
          error: action.payload,
          data: {},
        },
      };
    case CITY_WEATHER_TODAY_SUCCESS:
      return {
        ...state,
        current: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    case CITY_WEATHER_SEVEN_DAYS_REQUEST:
      return {
        ...state,
        daily: {
          loading: true,
          error: null,
          data: [],
        },
      };
    case CITY_WEATHER_SEVEN_DAYS_FAILURE:
      return {
        ...state,
        daily: {
          loading: false,
          error: action.payload,
          data: [],
        },
      };
    case CITY_WEATHER_SEVEN_DAYS_SUCCESS:
      return {
        ...state,
        daily: {
          loading: false,
          error: null,
          data: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
