import React from 'react';

import './weather-list.scss';

const WeatherList = () => (
  <ul className="weather-list">
    <li className="weather-list__item">
      <p className="weather-list__week-day">
        Понедельник
      </p>
      <p className="weather-list__date">
        27 июля
      </p>
      <p className="weather-list__weather">
        <img
          className="weather-list__weather-img"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          width="100"
          height="100"
          alt="weather"
        />
      </p>
      <p className="weather-list__temp-day">
        20°
      </p>
      <p className="weather-list__temp-night">
        21°C
      </p>
    </li>
    <li className="weather-list__item">
      <p className="weather-list__week-day">
        Понедельник
      </p>
      <p className="weather-list__date">
        27 июля
      </p>
      <p className="weather-list__weather">
        <img
          className="weather-list__weather-img"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          width="100"
          height="100"
          alt="weather"
        />
      </p>
      <p className="weather-list__temp-day">
        20°
      </p>
      <p className="weather-list__temp-night">
        21°C
      </p>
    </li>
    <li className="weather-list__item">
      <p className="weather-list__week-day">
        Понедельник
      </p>
      <p className="weather-list__date">
        27 июля
      </p>
      <p className="weather-list__weather">
        <img
          className="weather-list__weather-img"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          width="100"
          height="100"
          alt="weather"
        />
      </p>
      <p className="weather-list__temp-day">
        20°
      </p>
      <p className="weather-list__temp-night">
        21°C
      </p>
    </li>
    <li className="weather-list__item">
      <p className="weather-list__week-day">
        Понедельник
      </p>
      <p className="weather-list__date">
        27 июля
      </p>
      <p className="weather-list__weather">
        <img
          className="weather-list__weather-img"
          src="http://openweathermap.org/img/wn/01d@2x.png"
          width="100"
          height="100"
          alt="weather"
        />
      </p>
      <p className="weather-list__temp-day">
        20°
      </p>
      <p className="weather-list__temp-night">
        21°C
      </p>
    </li>
  </ul>
);

export default WeatherList
