import { InitialStateType } from '../types/state-types';
import { updateWeatherCurrent } from './weather-current';
import { updateWeatherCoords } from './weather-coords';
import { updateWeatherDaily } from './weather-daily';

import { ActionTypes } from '../types/action-types';

const initialState: InitialStateType = {
  coords: {
    loading: false,
    error: false,
    data: {
      location: 'Moscow',
      latitude: 55.751244,
      longitude: 37.618423,
    },
  },
  current: {
    loading: false,
    error: false,
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
    loading: false,
    error: false,
    data: [],
  },
};

const reducer = (state = initialState, action: ActionTypes) => ({
  daily: updateWeatherDaily(state.daily, action),
  coords: updateWeatherCoords(state.coords, action),
  current: updateWeatherCurrent(state.current, action),
});

export { reducer };
