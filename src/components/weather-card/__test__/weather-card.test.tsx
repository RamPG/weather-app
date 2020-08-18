import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WeatherCard } from '../weather-card';
import { transformedDataCurrent } from '../../../__mocks__/transformed-data';

describe('Weather card', () => {
  afterEach(cleanup);
  it('Snapshot', () => {
    const { asFragment } = render(<WeatherCard data={transformedDataCurrent} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
