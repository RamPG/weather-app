import React, { useState, useEffect } from 'react';

import './clock.scss';

import { TimeLibrary } from '../../services/time-library';

const useClock = () => {
  const [hours, setHours] = useState(TimeLibrary.getHoursFormat());
  const [minutes, setMinutes] = useState(TimeLibrary.getMinutesFormat());
  useEffect(() => {
    const timerId = setInterval(() => {
      setHours(TimeLibrary.getHoursFormat());
      setMinutes(TimeLibrary.getMinutesFormat());
    }, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, [minutes]);
  return { hours, minutes };
};

const Clock = () => {
  const time = useClock();
  const { hours, minutes } = time;
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

export default Clock;
