import WeatherAPI from '../services/weather-api';
import { CHANGE_CITY } from '../actions/actions-constant';

const weatherAPI = new WeatherAPI();
const initialState = {
  cityId: 0,
  cityName: weatherAPI.getCityDate(0).cityName,
  current: weatherAPI.getWeatherDataToday(0),
  daily: weatherAPI.getWeatherSevenDays(0),
};
const reducer = (state = initialState, action) => {
  const id = action.payload;
  switch (action.type) {
    case CHANGE_CITY:
      return {
        cityId: id,
        cityName: weatherAPI.getCityDate(id),
        current: weatherAPI.getWeatherDataToday(id),
        daily: weatherAPI.getWeatherSevenDays(id),
      };
    default:
      return state;
  }
};

export default reducer;
