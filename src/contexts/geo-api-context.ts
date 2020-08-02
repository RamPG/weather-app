import React from 'react';
import { GeoApi } from '../services/geo-api';

const GeoApiContext = React.createContext(new GeoApi());

export { GeoApiContext };
