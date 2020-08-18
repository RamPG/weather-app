import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WeatherListItem } from '../weather-list-item';
import { transformedDataDaily } from '../../../__mocks__/transformed-data';

describe('Weather list item', () => {
  afterEach(cleanup);
  it('Snapshot', () => {
    const { asFragment } = render(<WeatherListItem {...transformedDataDaily[0]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
