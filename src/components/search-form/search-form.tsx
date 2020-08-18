import React, {
  useState, useEffect, useContext,
  FunctionComponent, FormEvent, ChangeEvent,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './search-form.scss';

import {
  changeCoordsByBrowserNavigator,
  changeCoords,
} from '../../reducers/coords/actions';
import { WeatherApiContext } from '../../contexts';

import { InitialStateType } from '../../types/state-types';
import { WeatherApi } from '../../services/weather-api';
import { DispatchType } from '../../types/action-types';
import { useLocation } from '../../user-hooks/use-location';

type SearchFormRenderPropsType = {
    onChangeTerm: (evt: ChangeEvent<HTMLInputElement>) => void,
    onFindCity: (evt: FormEvent<HTMLFormElement>) => void,
    status: string,
    term: string,
    city: string,
};

const SearchFormRender: FunctionComponent<SearchFormRenderPropsType> = ({
  onChangeTerm, onFindCity, status, term, city,
}) => (
  <form onSubmit={onFindCity}>
    <input
      type="text"
      value={term}
      placeholder="City name"
      onChange={onChangeTerm}
    />
    <button
      type="submit"
    >
      Find
    </button>
    <p>
      {status}
    </p>
    <p>
      Weather in
      {' '}
      {city}
    </p>
  </form>
);

export const SearchForm: FunctionComponent = () => {
  const [term, setTerm] = useState<string>('');
  const { isError, isLoading, data } = useSelector(({ coords }: InitialStateType) => (coords));
  const status: string = isLoading ? 'Loading...' : isError ? 'Error!' : 'Find!';
  const dispatch = useDispatch<DispatchType>();
  const weatherApi: WeatherApi = useContext(WeatherApiContext);
  useEffect(() => {
    let location: string | null = 'Moscow';
    if (localStorage.getItem('city')) {
      location = localStorage.getItem('city');
    }
    if (typeof location === 'string') {
      dispatch(changeCoords(weatherApi, location));
    }
    useLocation(weatherApi, dispatch, changeCoordsByBrowserNavigator);
  }, []);

  const onFindCity = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    dispatch(changeCoords(weatherApi, term));
    setTerm('');
  };

  const onChangeTerm = (evt: ChangeEvent<HTMLInputElement>): void => {
    setTerm(evt.target.value);
  };

  return (
    <SearchFormRender
      onFindCity={onFindCity}
      onChangeTerm={onChangeTerm}
      term={term}
      status={status}
      city={data.location}
    />
  );
};
