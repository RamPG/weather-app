import React from 'react';
import { render, cleanup, queries } from '@testing-library/react';
import { Clock, ClockPropsType } from '../clock';

describe('Clock component', () => {
  let props: ClockPropsType;
  afterEach(cleanup);
  beforeAll(() => {
    props = {
      hoursStart: 12,
      minutesStart: 0,
      secondsStart: 0,
    };
  });
  it('Snapshot', () => {
    const { asFragment } = render(<Clock {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
