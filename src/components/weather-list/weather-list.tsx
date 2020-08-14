import React, { FunctionComponent } from 'react';

import './weather-list.scss';

import { WeatherListItem } from '../weather-list-item';
import { TransformedDailyDataType } from '../../types/state-types';

export const WeatherList: FunctionComponent<{ data: Array<TransformedDailyDataType> }> = ({ data }) => (
  <section className="weather-forecast">
    <h1 className="weather-forecast__title">
      Weather for seven days
    </h1>
    <ul className="weather-forecast__weather-list weather-list">
      {
          data.map((element) => (
            <li key={element.id}>
              <WeatherListItem
                {...element}
              />
            </li>
          ))
        }
    </ul>
  </section>
);
