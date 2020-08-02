import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './weather-card.scss';

import { cityWeatherTodayFetch } from '../../actions/actions';
import { WeatherApiContext } from '../../contexts';
import { TodayDate } from '../today-date';

const WeatherCardRender = ({
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

export const WeatherCard = () => {
  const location = useSelector((state) => state.coords.data.location);
  const { loading, error, data } = useSelector(({ current }) => current);
  const dispatch = useDispatch();
  const WeatherApi = useContext(WeatherApiContext);
  useEffect(() => {
    dispatch(cityWeatherTodayFetch(WeatherApi));
  }, [location]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return <WeatherCardRender location={location} {...data} />;
};
