import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TodayDate, TodayDatePropsType } from '../today-date';

describe('Today date', () => {
  let props: TodayDatePropsType;
  beforeAll(() => {
    props = {
      monthDay: 17,
      nameMonth: 'August',
      year: 2020,
      nameDay: 'Monday',
    };
  });
  afterEach(cleanup);
  it('Snapshot', () => {
    const { asFragment } = render(<TodayDate {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
