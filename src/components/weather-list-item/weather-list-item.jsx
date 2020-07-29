import React from 'react';

import './weather-list-item.scss';

const WeatherListItem = ({
  weekDayName, monthDay, monthDayName, temp, feelsLike, humidity, weather, windSpeed,
}) => (
  <>
    <p className="weather-list__item-content">
      {weekDayName}
    </p>
    <p className="weather-list__item-content">
      {monthDay}
      {' '}
      {monthDayName}
    </p>
    <p className="weather-list__item-content">
      <img
        className="weather-list__weather-img"
        src="http://openweathermap.org/img/wn/01d@2x.png"
        width="100"
        height="100"
        alt="weather"
      />
    </p>
    <p className="weather-list__item-content">
      Temp day
      {' '}
      {temp.day}
      °
    </p>
    <p className="weather-list__item-content">
      Temp night
      {' '}
      {temp.night}
      °C
    </p>
    <p className="weather-list__item-content">
      Feels like
      {' '}
      {feelsLike.day}
    </p>
    <p className="weather-list__item-content">
      Feels like
      {' '}
      {feelsLike.night}
    </p>
    <p className="weather-list__item-content">
      Humidity
      {' '}
      {humidity}
    </p>
    <p className="weather-list__item-content">
      weather
      {' '}
      {weather}
    </p>
    <p className="weather-list__item-content">
      Wind Speed
      {' '}
      {windSpeed}
    </p>
  </>
);

export default WeatherListItem;
