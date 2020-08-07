export function getWeekDay(current: Date = new Date()): number {
  return current.getDay();
}

export function getMonth(current: Date = new Date()): number {
  return current.getMonth();
}

export function getMonthDay(current: Date = new Date()): number {
  return current.getDate();
}

export function getYear(current: Date = new Date()): number {
  return current.getFullYear();
}

export function addWeekDay(value: number, weekDay: number = getWeekDay()): number {
  return (weekDay + value) % 7;
}

export function getDaysInMonth(year: number = getYear(), month: number = getMonth()): number {
  const currentDate: number = new Date(year, month, 1).getTime();
  const nextDate: number = new Date(year, month + 1, 1).getTime();
  return Math.round((nextDate - currentDate) / 1000 / 3600 / 24);
}

export function addMonthDay(
  value: number, monthDay: number = getMonthDay(), daysInMonth: number = getDaysInMonth(),
): number {
  if (monthDay + value > daysInMonth) {
    return (monthDay + value) % daysInMonth;
  }
  return monthDay + value;
}

export function addMonth(
  value: number, monthDay: number = getMonthDay(), daysInMonth: number = getDaysInMonth(), month: number = getMonth(),
): number {
  if (monthDay + value > daysInMonth) {
    return (month + 1) % 12;
  }
  return month % 12;
}

export function getHoursFormat(hours: number = new Date().getHours()): string {
  return hours < 10 ? `0${hours}` : `${hours}`;
}

export function getMinutesFormat(minutes: number = new Date().getMinutes()): string {
  return minutes < 10 ? `0${minutes}` : `${minutes}`;
}

export function getSecondsFormat(seconds: number = new Date().getSeconds()): string {
  return seconds < 10 ? `0${seconds}` : `${seconds}`;
}

export function getLastSundayMonthDate(
  year: number = getYear(), month: number = getMonth(), daysInMonth: number,
): number {
  const currentDay: number = getWeekDay(new Date(year, month, 1));
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
