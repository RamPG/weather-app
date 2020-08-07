import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './components/app';

import { getLastSundayMonthDate } from './services/TimeLibrary/TimeLibrary';

console.log(getLastSundayMonthDate(2020, 7, 31));
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
