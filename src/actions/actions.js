import {
  CITY_WEATHER_TODAY_REQUEST, CITY_WEATHER_TODAY_SUCCESS, CITY_WEATHER_TODAY_FAILURE,
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
  dispatch(cityWeatherTodayRequest());
  weatherApi.getWeatherDataToday(getState().cityId)
    .then((data) => {
      dispatch(cityWeatherTodaySuccess(data));
    })
    .catch((error) => dispatch(cityWeatherTodayFailure(error)));
};
