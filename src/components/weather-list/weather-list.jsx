import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './weather-list.scss';

import { cityWeatherSevenDaysFetch } from '../../actions/actions';
import withWeatherApi from '../../hoc/with-weather-api';
import WeatherListItem from '../weather-list-item';

const WeatherList = ({ data }) => (
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

const WeatherListContainer = ({ cityWeatherSevenDaysFetch, location, daily: { data, loading, error } }) => {
  useEffect(() => {
    cityWeatherSevenDaysFetch();
  }, [location]);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error!</h1>;
  }
  return <WeatherList data={data} />;
};

const mapStateToProps = ({ daily, location }) => ({
  daily,
  location,
});

const mapDispatchToProps = (dispatch, { weatherApi }) => ({
  cityWeatherSevenDaysFetch: () => dispatch(cityWeatherSevenDaysFetch(weatherApi)),
});

export default withWeatherApi(connect(mapStateToProps, mapDispatchToProps)(WeatherListContainer));
