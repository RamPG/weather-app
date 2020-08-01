import {
  CITY_CHANGE_FAILURE, CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS
} from '../actions/actions-constant';

import {
  SubStateType, DataCoordsStateType
} from '../types/state-types';

function updateWeatherCoords(state: SubStateType<DataCoordsStateType>, action: any) {
  switch (action.type) {
    case CITY_CHANGE_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case CITY_CHANGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case CITY_CHANGE_SUCCESS:
      return {
        loading: false,
        error: false,
        data: {
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    default:
      return state;
  }
}

export { updateWeatherCoords };
