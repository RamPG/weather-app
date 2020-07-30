import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
  CITY_WEATHER_SEVEN_DAYS_REQUEST, CITY_WEATHER_SEVEN_DAYS_SUCCESS, CITY_WEATHER_SEVEN_DAYS_FAILURE,
  CITY_CHANGE_REQUEST, CITY_CHANGE_SUCCESS, CITY_CHANGE_FAILURE,
} from './actions-constant';

const cityWeatherTodayRequest = () => ({
  type: CITY_WEATHER_TODAY_REQUEST,
});

const cityWeatherTodayFailure = (error) => ({
  type: CITY_WEATHER_TODAY_FAILURE,
  payload: error,
});

const cityWeatherTodaySuccess = (cityWeatherTodayData) => ({
  type: CITY_WEATHER_TODAY_SUCCESS,
  payload: cityWeatherTodayData,
});

export const cityWeatherTodayFetch = (weatherApi) => (dispatch, getState) => {
  console.log('dispatch');
  dispatch(cityWeatherTodayRequest());
  weatherApi.getWeatherDataToday({
    latitude: getState().coords.latitude,
    longitude: getState().coords.longitude,
  })
    .then((data) => {
      dispatch(cityWeatherTodaySuccess(data));
    })
    .catch((error) => {
      dispatch(cityWeatherTodayFailure(error));
    });
};

const cityWeatherSevenDaysRequest = () => ({
  type: CITY_WEATHER_SEVEN_DAYS_REQUEST,
});

const cityWeatherSevenDaysFailure = (error) => ({
  type: CITY_WEATHER_SEVEN_DAYS_FAILURE,
  payload: error,
});

const cityWeatherSevenDaysSuccess = (cityWeatherTodayData) => ({
  type: CITY_WEATHER_SEVEN_DAYS_SUCCESS,
  payload: cityWeatherTodayData,
});

export const cityWeatherSevenDaysFetch = (weatherApi) => (dispatch, getState) => {
  dispatch(cityWeatherSevenDaysRequest());
  weatherApi.getWeatherDataSevenDays({
    latitude: getState().coords.latitude,
    longitude: getState().coords.longitude,
  })
    .then((data) => {
      dispatch(cityWeatherSevenDaysSuccess(data));
    })
    .catch((error) => {
      dispatch(cityWeatherSevenDaysFailure(error));
    });
};

const cityChangeRequest = () => ({
  type: CITY_CHANGE_REQUEST,
});

const cityChangeFailure = (error) => ({
  type: CITY_CHANGE_FAILURE,
  payload: error,
});

const cityChangeSuccess = (cityChangeCoords) => ({
  type: CITY_CHANGE_SUCCESS,
  payload: cityChangeCoords,
});

export const cityChangeCoordsFetch = (geoApi, location) => (dispatch, getState) => {
  dispatch(cityChangeRequest());
  geoApi.getGeoCity(location)
    .then((data) => {
      dispatch(cityChangeSuccess(data));
      console.log(getState());
    })
    .catch((error) => {
      dispatch(cityChangeFailure(error));
    });
};
