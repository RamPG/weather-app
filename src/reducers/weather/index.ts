import {
  FETCH_WEATHER_FAILURE,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_REQUEST,
} from './actions-constants';

import { DataWeatherStateType, SubStateType } from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

const initialState: SubStateType<DataWeatherStateType> = {
  isLoading: true,
  isError: false,
  data: {
    daily: [],
    current: {
      imgLink: '',
      temp: '',
      feelsLike: '',
      humidity: 0,
      weather: '',
      windSpeed: 0,
    },
  },
};
function weatherReducer(state: SubStateType<DataWeatherStateType> = initialState, action: ActionTypes) {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: {
          daily: action.payload.daily,
          current: action.payload.current,
        },
      };
    default:
      return state;
  }
}

export { weatherReducer };
