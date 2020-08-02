import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './weather-list.scss';

import { cityWeatherSevenDaysFetch } from '../../actions/actions';
import { WeatherListItem } from '../weather-list-item';
import { WeatherApiContext } from '../../contexts';

const WeatherListRender = ({ data }) => (
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

export const WeatherList = () => {
  const location = useSelector((state) => state.coords.data.location);
  const { loading, error, data } = useSelector(({ daily }) => daily);
  const dispatch = useDispatch();
  const WeatherApi = useContext(WeatherApiContext);
  useEffect(() => {
    dispatch(cityWeatherSevenDaysFetch(WeatherApi));
  }, [location]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return <WeatherListRender data={data} />;
};
