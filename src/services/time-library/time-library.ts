export function getWeekDayNow(): number {
  return new Date().getDay();
}

export function getMonthNow(): number {
  return new Date().getMonth();
}

export function getYearNow(): number {
  return new Date().getFullYear();
}

export function getMonthDayNow(): number {
  return new Date().getDate();
}

export function addWeekDay(value: number): number {
  return (getWeekDayNow() + value) % 7;
}

export function addMonthDay(value: number): number {
  if (getMonthDayNow() + value > getDaysInMonth()) {
    return (getMonthDayNow() + value) % getDaysInMonth();
  }
  return getMonthDayNow() + value;
}

export function addMonth(value: number): number {
  if (getMonthDayNow() + value > getDaysInMonth()) {
    return (getMonthNow() + 1) % 12;
  }
  return getMonthNow();
}

export function getHoursFormat(): string {
  const hours: number = new Date().getHours();
  return hours < 10 ? `0${hours}` : `${hours}`;
}

export function getMinutesFormat(): string {
  const minutes: number = new Date().getMinutes();
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
}

export function getSecondsFormat(): string {
  const seconds: number = new Date().getSeconds();
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}

export function getDaysInMonth(year: number = getYearNow(), month: number = getMonthNow()): number {
  const currentDate: number = new Date(year, month, 1).getTime();
  const nextDate: number = new Date(year, month + 1, 1).getTime();
  return Math.round((nextDate - currentDate) / 1000 / 3600 / 24);
}

export function getSundayDate(
  year: number = getYearNow(), month: number = getMonthNow(), daysInMonth: number,
): number {
  const currentDay: number = new Date(year, month, 1).getDay();
  if (currentDay === 0) {
    return 1;
  }
  return daysInMonth - currentDay + 1;
}

export function getNameMonth(month: number): string {
  const monthsNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthsNames[month];
}

export function getNameDay(day: number): string {
  const daysNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return daysNames[day];
}
