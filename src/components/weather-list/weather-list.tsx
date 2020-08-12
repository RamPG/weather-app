import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import './weather-list.scss';

import { WeatherListItem } from '../weather-list-item';
import { DataDailyStateType, InitialStateType } from '../../types/state-types';
import { useReducerStateRender } from '../../user-hooks/use-reducer-state-render';

const WeatherListRender: FunctionComponent<{ data: Array<DataDailyStateType> }> = ({ data }) => (
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

export const WeatherList: FunctionComponent = () => {
  const { isLoading, isError, data } = useSelector(({ daily }: InitialStateType) => daily);
  return useReducerStateRender<Array<DataDailyStateType>>(isLoading, isError, data, WeatherListRender);
};
