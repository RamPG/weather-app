import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  changeCoordsRequest, changeCoordsSuccess, changeCoordsFailure,
  changeCoordsByBrowserNavigator, changeCoords,
} from '../actions';

import {
  CHANGE_COORDS_FAILURE,
  CHANGE_COORDS_REQUEST,
  CHANGE_COORDS_SUCCESS,
} from '../actions-constants';
import { WeatherApiConsumer } from '../../../services/weather-api/weather-api-consumer';
import {
  DispatchType,
  ChangeCoordsRequestActionType,
  ChangeCoordsSuccessActionType,
  ChangeCoordsFailureActionType,
} from '../../../types/action-types';
import { DataCoordsStateType } from '../../../types/state-types';

import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from '../../weather/actions-constants';
import { transformedDataCoords, transformedDataCurrent, transformedDataDaily } from '../../../__mocks__/transformed-data';
import { WeatherApi } from '../../../services/weather-api';

const mockStore = createMockStore<DataCoordsStateType, DispatchType>([thunk]);

describe('Coords actions test', () => {
  let expectedActionRequest: ChangeCoordsRequestActionType;
  let expectedActionSuccess: ChangeCoordsSuccessActionType;
  let expectedActionFailute: ChangeCoordsFailureActionType;
  beforeAll(() => {
    expectedActionRequest = {
      type: CHANGE_COORDS_REQUEST,
    };
    expectedActionSuccess = {
      type: CHANGE_COORDS_SUCCESS,
      payload: transformedDataCoords,
    };
    expectedActionFailute = {
      type: CHANGE_COORDS_FAILURE,
    };
  });
  describe('Sync actions', () => {
    it('changeCoordsRequest return right data', () => {
      expect(changeCoordsRequest()).toStrictEqual(expectedActionRequest);
    });
    it('changeCoordsFailure return right data', () => {
      expect(changeCoordsFailure()).toStrictEqual(expectedActionFailute);
    });
    it('changeCoordsSuccess return right data', () => {
      expect(changeCoordsSuccess(transformedDataCoords)).toStrictEqual(expectedActionSuccess);
    });
  });
  describe('Async actions', () => {
    let weatherApi: WeatherApi;
    beforeAll(() => {
      weatherApi = new WeatherApiConsumer();
    });
    it('changeCoords use necessary actions', () => {
      const expectedActions: Array<object> = [
        expectedActionRequest,
        expectedActionSuccess,
        {
          type: FETCH_WEATHER_REQUEST,
        },
        {
          type: FETCH_WEATHER_SUCCESS,
          payload: {
            daily: transformedDataDaily,
            current: transformedDataCurrent,
          },
        },
      ];
      const store = mockStore();
      return store.dispatch(changeCoords(weatherApi, transformedDataCoords.location))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
    it('changeCoordsByBrowserNavigator use necessary actions', () => {
      const expectedActions: Array<object> = [
        expectedActionRequest,
        expectedActionSuccess,
        {
          type: FETCH_WEATHER_REQUEST,
        },
      ];
      const store = mockStore();
      return store.dispatch(changeCoordsByBrowserNavigator(weatherApi, transformedDataCoords.latitude, transformedDataCoords.longitude))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });
});
