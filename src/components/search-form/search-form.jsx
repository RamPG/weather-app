import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './search-form.scss';

import { cityChangeCoordsFetch } from '../../actions/actions';
import { GeoApiContext } from '../../contexts';

const SearchFormRender = ({
  term, setTerm, onFindCity, status,
}) => (
  <form className="search-form" onSubmit={onFindCity}>
    <input
      className="search-form__input"
      type="text"
      value={term}
      placeholder="City name"
      onChange={(event) => {
        setTerm(event.target.value);
      }}
    />
    <button
      className="search-form__button"
      type="submit"
    >
      Find
    </button>
    <p className="search-form__status">
      {status}
    </p>
  </form>
);

export const SearchForm = () => {
  const [term, setTerm] = useState('');
  const { error, loading } = useSelector(({ coords }) => (coords));
  const dispatch = useDispatch();
  const geoApi = useContext(GeoApiContext);
  useEffect(() => {
    dispatch(cityChangeCoordsFetch(geoApi, 'Moscow'));
  }, []);
  const onFindCity = (evt) => {
    evt.preventDefault();
    dispatch(cityChangeCoordsFetch(geoApi, term));
    setTerm('');
  };
  if (loading) {
    return <SearchFormRender onFindCity={onFindCity} setTerm={setTerm} term={term} status="Loading..." />;
  }
  if (error) {
    return <SearchFormRender onFindCity={onFindCity} setTerm={setTerm} term={term} status="Error!" />;
  }
  return <SearchFormRender onFindCity={onFindCity} setTerm={setTerm} term={term} status="Find!" />;
};
