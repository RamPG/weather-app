import React, { useState, useEffect } from 'react';

import { getHoursFormat, getMinutesFormat, getSecondsFormat } from '../../services/time-library';

const useClock = () => {
  const [hours, setHours] = useState(getHoursFormat());
  const [minutes, setMinutes] = useState(getMinutesFormat());
  const [seconds, setSeconds] = useState(getSecondsFormat());
  useEffect(() => {
    setInterval(() => {
      setHours(getHoursFormat());
      setMinutes(getMinutesFormat());
      setSeconds(getSecondsFormat());
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
