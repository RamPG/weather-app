import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS, CITY_WEATHER_SEVEN_DAYS_FAILURE,
  CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS, CITY_CHANGE_FAILURE,
} from '../actions/actions-constant';

const initialState = {
  location: 'Moscow, Central Administrative Okrug, Moscow, Central Federal District, Russia',
  coords: {
    loading: false,
    error: null,
    latitude: '55.751244',
    longitude: '37.618423',
  },
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
    case CITY_CHANGE_REQUEST:
      return {
        ...state,
        coords: {
          ...state.coords,
          loading: true,
          error: null,
        },
      };
    case CITY_CHANGE_FAILURE:
      return {
        ...state,
        coords: {
          ...state.coords,
          loading: false,
          error: action.payload,
        },
      };
    case CITY_CHANGE_SUCCESS:
      return {
        ...state,
        location: action.payload.location,
        coords: {
          loading: false,
          error: null,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    default:
      return state;
  }
};

export default reducer;
