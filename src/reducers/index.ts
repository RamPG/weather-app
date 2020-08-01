import { CITY_CHANGE_SUCCESS } from '../actions/actions-constant';

import { InitialStateType } from '../types/state-types';
import { updateWeatherCurrent } from './weather-current';
import { updateWeatherCoords } from './weather-coords';
import { updateWeatherDaily } from './weather-daily';

const initialState: InitialStateType = {
  location: 'Moscow',
  coords: {
    loading: false,
    error: false,
    data: {
      latitude: 55.751244,
      longitude: 37.618423,
    },
  },
  current: {
    loading: false,
    error: false,
    data: {
      imgLink: null,
      temp: null,
      feelsLike: null,
      humidity: null,
      weather: null,
      windSpeed: null,
    },
  },
  daily: {
    loading: false,
    error: false,
    data: [{
      id: null,
      imgLink: null,
      weekDayName: null,
      monthDay: null,
      monthDayName: null,
      temp: {
        day: null,
        night: null,
      },
      weather: null,
    }],
  },
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CITY_CHANGE_SUCCESS:
      return {
        ...state,
        location: action.payload.location,
        coords: updateWeatherCoords(state.coords, action),
      };
    default:
      return {
        ...state,
        daily: updateWeatherDaily(state.daily, action),
        coords: updateWeatherCoords(state.coords, action),
        current: updateWeatherCurrent(state.current, action),
      };
  }
};

export { reducer };
