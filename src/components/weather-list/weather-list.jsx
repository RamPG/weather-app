import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './weather-list.scss';

import { cityWeatherSevenDaysFetch } from '../../actions/actions';
import withWeatherApi from '../../hoc-helpers';
import WeatherListItem from '../weather-list-item';

const WeatherList = ({ cityWeatherSevenDaysFetch, daily }) => {
  useEffect(() => {
    cityWeatherSevenDaysFetch();
  }, []);
  return (
    <ul className="weather-list">
      {
        daily.data.map((element) => (
          <li key={element.id}>
            <WeatherListItem
              weekDayName={element.weekDayName}
              monthDay={element.monthDay}
              monthDayName={element.monthDayName}
              temp={element.temp}
              feelsLike={element.feelsLike}
              humidity={element.humidity}
              weather={element.weather}
              windSpeed={element.windSpeed}
            />
          </li>
        ))
      }
    </ul>
  );
};
const mapStateToProps = ({ daily }) => ({
  daily,
});
const mapDispatchToProps = (dispatch, { weatherApi }) => ({
  cityWeatherSevenDaysFetch: () => dispatch(cityWeatherSevenDaysFetch(weatherApi)),
});
export default withWeatherApi(connect(mapStateToProps, mapDispatchToProps)(WeatherList));
