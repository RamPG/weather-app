import { combineReducers } from 'redux';
import { weatherReducer } from './weather';
import { coordsReducer } from './coords';

export const reducer = combineReducers({
  weather: weatherReducer,
  coords: coordsReducer,
});
