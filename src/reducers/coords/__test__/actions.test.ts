import createMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  changeCoordsRequest, changeCoordsSuccess, changeCoordsFailure,
  changeCoordsByBrowserNavigator, changeCoords,
} from '../actions';

import {
  CHANGE_COORDS_FAILURE,
  CHANGE_COORDS_REQUEST,
  CHANGE_COORDS_SUCCESS,
} from '../actions-constants';
import { WeatherApi } from '../../../services/weather-api';
import { DispatchType } from '../../../types/action-types';
import { DataCoordsStateType } from '../../../types/state-types';
import { coordsResponseMock, weatherResponseMock } from '../../../__mocks__/mock-responses';

const mockStore = createMockStore<DataCoordsStateType, DispatchType>([thunk]);

describe('Weather coords actions test', () => {
  let mockPayload: DataCoordsStateType;
  beforeAll(() => {
    mockPayload = {
      location: coordsResponseMock.display_name.split(', ')[0],
      latitude: Number(coordsResponseMock.lat),
      longitude: Number(coordsResponseMock.lon),
    };
  });
  describe('Sync actions', () => {
    it('changeCoordsRequest return right data', () => {
      const expectedAction = {
        type: CHANGE_COORDS_REQUEST,
      };
      expect(changeCoordsRequest()).toStrictEqual(expectedAction);
    });
    it('changeCoordsFailure return right data', () => {
      const expectedAction = {
        type: CHANGE_COORDS_FAILURE,
      };
      expect(changeCoordsFailure()).toStrictEqual(expectedAction);
    });
    it('changeCoordsSuccess return right data', () => {
      const expectedAction = {
        type: CHANGE_COORDS_SUCCESS,
        payload: mockPayload,
      };
      expect(changeCoordsSuccess(expectedAction.payload)).toStrictEqual(expectedAction);
    });
  });
  describe('Async actions', () => {
    let weatherApi: WeatherApi;
    let urlWeather: string;
    let urlGeo: string;
    let apiKeyWeather: string;
    let apiKeyGeo: string;
    beforeAll(() => {
      weatherApi = new WeatherApi();
      urlGeo = weatherApi._urlGeoApi;
      urlWeather = weatherApi._urlWeatherApi;
      apiKeyGeo = weatherApi._apiKeyGeo;
      apiKeyWeather = weatherApi._apiKeyWeather;
    });
    beforeEach(() => {
      fetchMock.getOnce(
          `${urlGeo}/search.php?key=${apiKeyGeo}&q=${mockPayload.location}&format=json&accept-language=en`,
          [
            coordsResponseMock,
          ],
      );
      fetchMock.getOnce(
          `${urlWeather}/data/2.5/onecall?lat=${mockPayload.latitude}&lon=${mockPayload.longitude}&exclude=hourly,minutely&appid=${apiKeyWeather}`,
          [
            weatherResponseMock,
          ],
      );
    });
    afterEach(() => {
      fetchMock.reset();
    });
    it('changeCoords use necessary actions', () => {
      /* const expectedActions: Array<object> = [
        {
          type: CHANGE_COORDS_SUCCESS,
          payload: { location: 'Moscow', latitude: 25.5, longitude: 24.4 },
        },
        { type: FETCH_DAILY_WEATHER_REQUEST },
        { type: FETCH_CURRENT_WEATHER_REQUEST },
      ];
      const store = mockStore();
      return store.dispatch(changeCoords(weatherApi, mockPayload.location))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    }); */
    });
  })
});
