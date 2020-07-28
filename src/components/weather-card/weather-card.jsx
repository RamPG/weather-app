import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './weather-card.scss';
import { bindActionCreators } from 'redux';
import { cityWeatherFetch } from '../../actions/actions';
import withWeatherApi from '../../hoc-helpers';

const WeatherCard = ({
  cityWeatherFetch, current: {
    feelsLike, humidity, temp, weather, windSpeed, cityName,
  },
}) => {
  useEffect(() => {
    cityWeatherFetch();
  }, []);
  console.log(cityWeatherFetch, feelsLike, humidity, temp, weather, cityName, windSpeed);
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
const mapStateToProps = (state) => {
  console.log(state);
  const { cityName, current } = state;
  console.log(cityName, current);
  return { cityName, current };
};
const mapDispatchToProps = (dispatch, { weatherApi }) => bindActionCreators({
  cityWeatherFetch: cityWeatherFetch(weatherApi),
}, dispatch);
export default withWeatherApi(connect(mapStateToProps, mapDispatchToProps)(WeatherCard));
