import React, { useState, useEffect, FunctionComponent } from 'react';

import './clock.scss';

import { getHoursFormat, getMinutesFormat } from '../../services/TimeLibrary';

type setTimeState = {
  hours: string,
  minutes: string,
};

export const Clock: FunctionComponent = () => {
  const [time, setTime] = useState<setTimeState>({ hours: getHoursFormat(), minutes: getMinutesFormat() });
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime({ hours: getHoursFormat(), minutes: getMinutesFormat() });
    }, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, [time.minutes]);
  return (
    <p>
      Time:
      {' '}
      {time.hours}
      :
      {time.minutes}
    </p>
  );
};
