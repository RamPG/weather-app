import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import './weather-card.scss';

import { cityWeatherTodayFetch } from '../../actions/actions';
import withWeatherApi from '../../hoc-helpers';

const WeatherCard = ({
  cityWeatherTodayFetch, current: {
    feelsLike, humidity, temp, weather, windSpeed, cityName,
  },
}) => {
  useEffect(() => {
    cityWeatherTodayFetch();
  }, []);
  return (
    <section className="main-card">
      <table className="main-card__table">
        <tbody>
          <tr className="main-card__table-row">
            <th className="main-card__parameter">
              Weather in
              {' '}
              {cityName}
            </th>
          </tr>
          <tr className="main-card__table-row">
            <th className="main-card__parameter">Temperature</th>
            <td className="main-card__value">
              {temp}
              °C
            </td>
          </tr>
          <tr className="main-card__table-row">
            <th className="main-card__parameter">Feels like</th>
            <td className="main-card__value">
              {feelsLike}
              °C
            </td>
          </tr>
          <tr className="main-card__table-row">
            <th className="main-card__parameter">Humidity</th>
            <td className="main-card__value">
              {humidity}
              %
            </td>
          </tr>
          <tr className="main-card__table-row">
            <th className="main-card__parameter">Weather</th>
            <td className="main-card__value">{weather}</td>
          </tr>
          <tr className="main-card__table-row">
            <th className="main-card__parameter">Wind speed</th>
            <td className="main-card__value">
              {windSpeed}
              {' '}
              m/s
            </td>
          </tr>
        </tbody>

      </table>
    </section>
  );
};
const mapStateToProps = ({ cityName, current }) => ({ cityName, current });

const mapDispatchToProps = (dispatch, { weatherApi }) => ({
  cityWeatherTodayFetch: () => dispatch(cityWeatherTodayFetch(weatherApi)),
});
export default withWeatherApi(connect(mapStateToProps, mapDispatchToProps)(WeatherCard));
