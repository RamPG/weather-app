import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './weather-card.scss';

import { cityWeatherTodayFetch } from '../../actions/actions';
import withWeatherApi from '../../hoc/with-weather-api';
import TodayDate from '../today-date';

const WeatherCard = ({
  location, feelsLike, humidity, temp, weather, windSpeed, imgLink,
}) => (
  <section className="main-card">
    <p className="main-card__city">
      Weather in
      {' '}
      {location}
    </p>
    <TodayDate className="main-card__date" />
    <p className="main-card__temp">
      {temp}
    </p>
    <p className="main-card__img-paragraph">
      <img className="main-card__img" src={imgLink} alt="weather" height="100" width="100" />
    </p>
    <p className="main-card__weather">
      {weather}
    </p>
    <p className="main-card__feels-like">
      Feels like
      {' '}
      {feelsLike}
    </p>
    <p className="main-card__wind-speed">
      {windSpeed}
      {' '}
      m/s
    </p>
    <p className="main-card__humidity">
      {humidity}
      %
    </p>
  </section>
);

const WeatherCardContainer = ({
  cityWeatherTodayFetch, location, loading, error, data,
}) => {
  useEffect(() => {
    cityWeatherTodayFetch();
  }, [location]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return <WeatherCard location={location} {...data} />;
};

const mapStateToProps = ({ location, current: { data, loading, error } }) => ({
  location, data, loading, error,
});

const mapDispatchToProps = (dispatch, { weatherApi }) => ({
  cityWeatherTodayFetch: () => dispatch(cityWeatherTodayFetch(weatherApi)),
});
export default withWeatherApi(connect(mapStateToProps, mapDispatchToProps)(WeatherCardContainer));
