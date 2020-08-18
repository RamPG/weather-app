import React, { FunctionComponent } from 'react';

import './weather-list.scss';

import { WeatherListItem } from '../weather-list-item';
import { TransformedDailyDataType } from '../../types/state-types';

export const WeatherList: FunctionComponent<{ data: Array<TransformedDailyDataType> }> = ({ data }) => (
  <section>
    <h1>
      Weather for seven days
    </h1>
    <ul>
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
