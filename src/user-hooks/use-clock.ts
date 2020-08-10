import { useEffect, useState } from 'react';
import {
  addHours, addMinutes, addSeconds, getHoursFormat, getMinutesFormat, getSecondsFormat,
} from '../services/time-library';

type SetTimeStateType = {
    hours: number,
    minutes: number,
    seconds: number,
};

type ReturnTimeType = {
    hours: string,
    minutes: string,
    seconds: string,
};

export function useClock(
  hoursStart: number, minutesStart: number,
  secondsStart: number, interval: number,
): ReturnTimeType {
  const initialTimeState: SetTimeStateType = {
    hours: hoursStart,
    minutes: minutesStart,
    seconds: secondsStart,
  };
  const addValues: SetTimeStateType = {
    hours: Math.floor(interval / 1000 / 60 / 60),
    minutes: Math.floor(interval / 1000 / 60),
    seconds: Math.floor(interval / 1000),
  };
  const [time, setTime] = useState<SetTimeStateType>(initialTimeState);
  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevState) => ({
        hours: addHours(addValues.minutes, addValues.hours, prevState.minutes, prevState.hours),
        minutes: addMinutes(addValues.seconds, addValues.minutes, prevState.seconds, prevState.minutes),
        seconds: addSeconds(addValues.seconds, prevState.seconds),
      }));
    }, interval);
    return () => {
      clearInterval(timerId);
    };
  }, [time.minutes]);
  return {
    hours: getHoursFormat(time.hours),
    minutes: getMinutesFormat(time.minutes),
    seconds: getSecondsFormat(time.seconds),
  };
}
