import React, { useState, useEffect } from 'react';

import './clock.scss';
import TimeLibrary from '../../services/time-library';

const useClock = () => {
  const [hours, setHours] = useState(TimeLibrary.getHoursFormat());
  const [minutes, setMinutes] = useState(TimeLibrary.getMinutesFormat());
  const [seconds, setSeconds] = useState(TimeLibrary.getSecondsFormat());
  useEffect(() => {
    setInterval(() => {
      setHours(TimeLibrary.getHoursFormat());
      setMinutes(TimeLibrary.getMinutesFormat());
      setSeconds(TimeLibrary.getSecondsFormat());
    }, 1000);
  }, [hours, minutes, seconds]);
  return { hours, minutes, seconds };
};
const Clock = () => {
  const time = useClock();
  const { hours, minutes, seconds } = time;
  return (
    <h1>
      {hours}
      :
      {minutes}
      :
      {seconds}
    </h1>
  );
};

export default Clock;
