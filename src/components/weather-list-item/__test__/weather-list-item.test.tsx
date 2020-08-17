import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { WeatherListItem } from '../weather-list-item';
import { transformedDataDaily } from '../../../__mocks__/transformed-data';

describe('Weather list item component test', () => {
  afterEach(cleanup);
  it('Weather list item snapshot', () => {
    const { asFragment } = render(<WeatherListItem {...transformedDataDaily[0]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
