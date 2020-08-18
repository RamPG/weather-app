import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WeatherList } from '../weather-list';
import { transformedDataDaily } from '../../../__mocks__/transformed-data';

describe('Weather list', () => {
  afterEach(cleanup);
  it('Snapshot', () => {
    const { asFragment } = render(<WeatherList data={transformedDataDaily} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
