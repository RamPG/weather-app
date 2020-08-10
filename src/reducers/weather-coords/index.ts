import {
  CHANGE_COORDS_REQUEST, CHANGE_COORDS_FAILURE, CHANGE_COORDS_SUCCESS,
} from './actions-constants';

import {
  SubStateType, DataCoordsStateType,
} from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

function updateWeatherCoords(state: SubStateType<DataCoordsStateType>, action: ActionTypes) {
  switch (action.type) {
    case CHANGE_COORDS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case CHANGE_COORDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case CHANGE_COORDS_SUCCESS:
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
