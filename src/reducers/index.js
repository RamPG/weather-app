import {
  CITY_CHANGE_SUCCESS,
} from '../actions/actions-constant';

import updateWeatherCurrent from './weather-current';
import updateWeatherCoords from './weather-coords';
import updateWeatherDaily from './weather-daily';

const initialState = {
  location: 'Moscow',
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
    case CITY_CHANGE_SUCCESS:
      return {
        location: action.payload.location,
        daily: updateWeatherDaily(state, action),
        coords: updateWeatherCoords(state, action),
        current: updateWeatherCurrent(state, action),
      };
    default:
      return {
        ...state,
        daily: updateWeatherDaily(state, action),
        coords: updateWeatherCoords(state, action),
        current: updateWeatherCurrent(state, action),
      };
  }
};

export default reducer;
