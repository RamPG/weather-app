import React, { FunctionComponent } from 'react';

import './clock.scss';

import { useClock } from '../../user-hooks/use-clock';

export type ClockPropsType = {
    hoursStart: number,
    minutesStart: number,
    secondsStart: number,
}

export const Clock: FunctionComponent<ClockPropsType> = (
  { hoursStart, minutesStart, secondsStart },
) => {
  const { hours, minutes } = useClock(hoursStart, minutesStart, secondsStart, 60000);
  return (
    <p>
      Time:
      {' '}
      <span>{hours}</span>
      :
      <span>{minutes}</span>
    </p>
  );
};
