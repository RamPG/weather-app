import React from 'react';
import { GeoApiConsumer } from '../contexts';

const withGeoApi = (Wrapped) => (props) => (
  <GeoApiConsumer>
    {
      (geoApi) => (<Wrapped {...props} geoApi={geoApi} />)
    }
  </GeoApiConsumer>
);

export default withGeoApi;
