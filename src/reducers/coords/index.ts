import {
  CHANGE_COORDS_REQUEST, CHANGE_COORDS_FAILURE, CHANGE_COORDS_SUCCESS,
} from './actions-constants';

import {
  SubStateType, DataCoordsStateType,
} from '../../types/state-types';

import { ActionTypes } from '../../types/action-types';

const initialState: SubStateType<DataCoordsStateType> = {
  isLoading: false,
  isError: false,
  data: {
    location: '',
    latitude: 55.751244,
    longitude: 37.618423,
  },
};
function coordsReducer(state: SubStateType<DataCoordsStateType> = initialState, action: ActionTypes) {
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

export { coordsReducer };
