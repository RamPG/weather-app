import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { InitialStateType } from '../../types/state-types';
import { WeatherCard } from '../weather-card';
import { WeatherList } from '../weather-list';

export const WeatherInfo: FunctionComponent = () => {
  const { isLoading, isError, data } = useSelector(({ weather: { isError, isLoading, data } }: InitialStateType) => ({
    isLoading,
    isError,
    data,
  }));
  if (isLoading) {
    return <h1 data-testid="loading">Loading...</h1>;
  }
  if (isError) {
    return <h1 data-testid="error">Error!</h1>;
  }
  return (
    <>
      <WeatherCard data={data.current} />
      <WeatherList data={data.daily} />
    </>
  );
};
