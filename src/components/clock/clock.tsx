import React, { useState, useEffect, FunctionComponent } from 'react';

import './clock.scss';

import {
  getHours, getHoursFormat, getMinutes, getMinutesFormat, getSeconds, getSecondsFormat,
} from '../../services/time-library';
import { useClock } from '../../user-hooks/use-clock';

export const Clock: FunctionComponent = () => {
  const { hours, minutes } = useClock(getHours(), getMinutes(), getSeconds(), 60000);
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
