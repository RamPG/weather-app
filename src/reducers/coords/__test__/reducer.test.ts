import { coordsReducer } from '../index';
import {
  CHANGE_COORDS_FAILURE,
  CHANGE_COORDS_REQUEST,
  CHANGE_COORDS_SUCCESS,
} from '../actions-constants';
import {
  ChangeCoordsFailureActionType,
  ChangeCoordsRequestActionType,
  ChangeCoordsSuccessActionType,
} from '../../../types/action-types';
import { DataCoordsStateType, SubStateType } from '../../../types/state-types';
import { transformedDataCoords } from '../../../__mocks__/transformed-data';

describe('Coords reducer', () => {
  let initialState: SubStateType<DataCoordsStateType>;
  beforeAll(() => {
    initialState = {
      isLoading: false,
      isError: false,
      data: {
        location: '',
        latitude: 55.751244,
        longitude: 37.618423,
      },
    };
  });
  it('CHANGE_COORDS_REQUEST action return loading true', () => {
    const action: ChangeCoordsRequestActionType = {
      type: CHANGE_COORDS_REQUEST,
    };
    expect(coordsReducer(initialState, action)).toStrictEqual({
      ...initialState,
      isLoading: true,
    });
  });
  it('CHANGE_COORDS_FAILURE action return error true', () => {
    const action: ChangeCoordsFailureActionType = {
      type: CHANGE_COORDS_FAILURE,
    };
    expect(coordsReducer(initialState, action)).toStrictEqual({
      ...initialState,
      isError: true,
      isLoading: false,
    });
  });
  it('CHANGE_COORDS_SUCCESS action return data', () => {
    const action: ChangeCoordsSuccessActionType = {
      type: CHANGE_COORDS_SUCCESS,
      payload: transformedDataCoords,
    };
    expect(coordsReducer(initialState, action)).toStrictEqual({
      isError: false,
      isLoading: false,
      data: action.payload,
    });
  });
});
