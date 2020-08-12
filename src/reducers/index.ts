import { InitialStateType } from '../types/state-types';
import { updateWeatherCurrent } from './weather-current';
import { updateWeatherCoords } from './weather-coords';
import { updateWeatherDaily } from './weather-daily';

import { ActionTypes } from '../types/action-types';

const initialState: InitialStateType = {
  coords: {
    isLoading: false,
    isError: false,
    data: {
      location: '',
      latitude: 55.751244,
      longitude: 37.618423,
    },
  },
  current: {
    isLoading: true,
    isError: false,
    data: {
      imgLink: '',
      temp: '',
      feelsLike: '',
      humidity: 0,
      weather: '',
      windSpeed: 0,
    },
  },
  daily: {
    isLoading: true,
    isError: false,
    data: [],
  },
};

export const reducer = (state: InitialStateType = initialState, action: ActionTypes) => ({
  daily: updateWeatherDaily(state.daily, action),
  coords: updateWeatherCoords(state.coords, action),
  current: updateWeatherCurrent(state.current, action),
});
