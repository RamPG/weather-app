import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './weather-card.scss';

import { cityWeatherTodayFetch } from '../../actions/actions';
import withWeatherApi from '../../hoc-helpers';

const WeatherCard = ({
  cityWeatherTodayFetch, cityName, loading, error, data: {
    feelsLike, humidity, temp, weather, windSpeed, imgLink,
  },
}) => {
  useEffect(() => {
    cityWeatherTodayFetch();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return (
    <section className="main-card">
      <img className="main-card__img" src={imgLink} />
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
const mapStateToProps = ({ cityName, current: { data, loading, error } }) => ({
  cityName, data, loading, error,
});

const mapDispatchToProps = (dispatch, { weatherApi }) => ({
  cityWeatherTodayFetch: () => dispatch(cityWeatherTodayFetch(weatherApi)),
});
export default withWeatherApi(connect(mapStateToProps, mapDispatchToProps)(WeatherCard));
