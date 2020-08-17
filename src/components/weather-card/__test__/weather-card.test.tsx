import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WeatherCard } from '../weather-card';
import { transformedDataCurrent } from '../../../__mocks__/transformed-data';

describe('Weather card component test', () => {
  afterEach(cleanup);
  it('Weather card snapshot', () => {
    const { asFragment } = render(<WeatherCard data={transformedDataCurrent} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
