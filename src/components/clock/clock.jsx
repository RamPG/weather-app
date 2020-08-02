import React, { useState, useEffect } from 'react';

import './clock.scss';

import { getHoursFormat, getMinutesFormat } from '../../services/time-library';

export const Clock = () => {
  const [hours, setHours] = useState(getHoursFormat());
  const [minutes, setMinutes] = useState(getMinutesFormat());
  useEffect(() => {
    const timerId = setInterval(() => {
      setHours(getHoursFormat());
      setMinutes(getMinutesFormat());
    }, 60000);
    return () => {
      clearInterval(timerId);
    };
  }, [minutes]);
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
