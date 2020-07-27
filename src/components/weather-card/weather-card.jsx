import React from 'react';

import './weather-card.scss';

const WeatherCard = () => (
  <section className="main-card">
    <table className="main-card__table">
      <tbody>
        <tr className="main-card__table-row">
          <th className="main-card__parameter">Weather in Moscow</th>
        </tr>
        <tr className="main-card__table-row">
          <th className="main-card__parameter">Temperature</th>
          <td className="main-card__value">20°C</td>
        </tr>
        <tr className="main-card__table-row">
          <th className="main-card__parameter">Feels like</th>
          <td className="main-card__value">18°C</td>
        </tr>
        <tr className="main-card__table-row">
          <th className="main-card__parameter">Humidity</th>
          <td className="main-card__value">60%</td>
        </tr>
        <tr className="main-card__table-row">
          <th className="main-card__parameter">Weather</th>
          <td className="main-card__value">Clear Sky</td>
        </tr>
        <tr className="main-card__table-row">
          <th className="main-card__parameter">Wind speed</th>
          <td className="main-card__value">3.94 m/s</td>
        </tr>
      </tbody>

    </table>
  </section>
);

export default WeatherCard;
