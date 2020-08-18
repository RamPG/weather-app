import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { WeatherInfo } from '../weather-info';
import { transformedDataCurrent, transformedDataDaily } from '../../../__mocks__/transformed-data';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Weather info', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('Snapshot with data ', () => {
    // @ts-ignore
    useSelector.mockImplementation(() => ({
      isLoading: false,
      isError: false,
      data: {
        current: transformedDataCurrent,
        daily: transformedDataDaily,
      },
    }));
    const { asFragment } = render(<WeatherInfo />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Render component with loading', () => {
    // @ts-ignore
    useSelector.mockImplementation(() => ({
      isLoading: true,
      isError: false,
      data: {},
    }));
    const { getByTestId } = render(<WeatherInfo />);
    expect(getByTestId('loading')).toContainHTML('<h1 data-testid="loading">Loading...</h1>');
  });
  it('Render component with error', () => {
    // @ts-ignore
    useSelector.mockImplementation(() => ({
      isLoading: false,
      isError: true,
      data: {},
    }));
    const { getByTestId } = render(<WeatherInfo />);
    expect(getByTestId('error')).toContainHTML('<h1 data-testid="error">Error!</h1>');
  });
});
