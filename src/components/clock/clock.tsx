import React, { FunctionComponent } from 'react';

import './clock.scss';

import {
  getHours, getMinutes, getSeconds,
} from '../../services/time-library';
import { useClock } from '../../user-hooks/use-clock';

type ClockPropsType = {
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
      {hours}
      :
      {minutes}
    </p>
  );
};
