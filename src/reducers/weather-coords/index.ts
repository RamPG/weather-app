import {
  CITY_CHANGE_FAILURE, CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS,
} from './actions-constants';

import {
  SubStateType, DataCoordsStateType,
} from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

function updateWeatherCoords(state: SubStateType<DataCoordsStateType>, action: ActionTypes) {
  switch (action.type) {
    case CITY_CHANGE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CITY_CHANGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CITY_CHANGE_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        data: {
          location: action.payload.location,
          latitude: action.payload.latitude,
          longitude: action.payload.longitude,
        },
      };
    default:
      return state;
  }
}

export { updateWeatherCoords };
