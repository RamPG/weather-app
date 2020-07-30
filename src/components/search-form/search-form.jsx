import React, { useState } from 'react';
import { connect } from 'react-redux';

import './search-form.scss';

import withGeoApi from '../../hoc-helpers/with-geo-api';

import { cityChangeCoordsFetch } from '../../actions/actions';

const SearchForm = ({ cityChangeCoordsFetch }) => {
  const [term, setTerm] = useState('');
  const onSubmit = (evt) => {
    evt.preventDefault();
    cityChangeCoordsFetch(term);
    setTerm('');
  };
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        className="search-form__input"
        type="text"
        value={term}
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
    </form>
  );
};
const mapDispatchToProps = (dispatch, { geoApi }) => ({
  cityChangeCoordsFetch: (cityName) => dispatch(cityChangeCoordsFetch(geoApi, cityName)),
});
export default withGeoApi(connect(null, mapDispatchToProps)(SearchForm));
