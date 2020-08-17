import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { TodayDate, TodayDatePropsType } from '../today-date';

describe('Today date component test', () => {
  afterEach(cleanup);
  it('Today date component snapshot', () => {
    const props: TodayDatePropsType = {
      monthDay: 17,
      nameMonth: 'August',
      year: 2020,
      nameDay: 'Monday',
    };
    const { asFragment } = render(<TodayDate {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
