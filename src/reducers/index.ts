import { InitialStateType } from '../types/state-types';
import { updateWeather } from './weather';
import { updateCoords } from './coords';

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
  weather: {
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
  },
};

export const reducer = (state: InitialStateType = initialState, action: ActionTypes) => ({
  weather: updateWeather(state.weather, action),
  coords: updateCoords(state.coords, action),
});
