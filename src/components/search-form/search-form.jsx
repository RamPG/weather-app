import React, { useState } from 'react';
import { connect } from 'react-redux';

import './search-form.scss';

import withGeoApi from '../../hoc/with-geo-api';

import { cityChangeCoordsFetch } from '../../actions/actions';

const SearchForm = ({
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

const SearchFormContainer = ({ cityChangeCoordsFetch, error, loading }) => {
  const [term, setTerm] = useState('');
  const onFindCity = (evt) => {
    evt.preventDefault();
    cityChangeCoordsFetch(term);
    setTerm('');
  };
  if (loading) {
    return <SearchForm onFindCity={onFindCity} setTerm={setTerm} term={term} status="Loading..." />;
  }
  if (error) {
    return <SearchForm onFindCity={onFindCity} setTerm={setTerm} term={term} status="Error!" />;
  }
  return <SearchForm onFindCity={onFindCity} setTerm={setTerm} term={term} status="Find!" />;
};

const mapStateToProps = ({ coords: { loading, error } }) => ({
  loading,
  error,
});

const mapDispatchToProps = (dispatch, { geoApi }) => ({
  cityChangeCoordsFetch: (cityName) => dispatch(cityChangeCoordsFetch(geoApi, cityName)),
});

export default withGeoApi(connect(mapStateToProps, mapDispatchToProps)(SearchFormContainer));
