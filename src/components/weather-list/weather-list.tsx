import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';

import './weather-list.scss';

import { WeatherListItem } from '../weather-list-item';
import { DataDailyStateType, InitialStateType } from '../../types/state-types';

type WeatherListRenderPropsType = {
    data: Array<DataDailyStateType>,
};

const WeatherListRender: FunctionComponent<WeatherListRenderPropsType> = ({ data }) => (
  <section className="weather-forecast">
    <h1 className="weather-forecast__title">
      Weather for next six days
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
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error!</h1>;
  }
  return <WeatherListRender data={data} />;
};
