import React from 'react';

import './weather-list-item.scss';

const WeatherListItem = ({
  weekDayName, monthDay, monthDayName, temp, weather, imgLink,
}) => (
  <>
    <p className="weather-list__item-week-day">
      {weekDayName}
    </p>
    <p className="weather-list__item-date">
      {monthDay}
      {' '}
      {monthDayName}
    </p>
    <p className="weather-list__item-img-block">
      <img
        className="weather-list__weather-img"
        src={imgLink}
        width="100"
        height="100"
        alt="weather"
      />
    </p>
    <p className="weather-list__item-temp-day">
      {temp.day}
    </p>
    <p className="weather-list__item-temp-night">
      {temp.night}
    </p>
    <p className="weather-list__item-weather">
      {weather}
    </p>
  </>
);

export default WeatherListItem;
