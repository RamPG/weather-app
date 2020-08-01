export class TimeLibrary {
  static getWeekDayNow(): number {
    return new Date().getDay();
  }

  static getMonthNow(): number {
    return new Date().getMonth();
  }

  static getYearNow(): number {
    return new Date().getFullYear();
  }

  static getMonthDayNow(): number {
    return new Date().getDate();
  }

  static addWeekDay(value: number): number {
    return (TimeLibrary.getWeekDayNow() + value) % 7;
  }

  static addMonthDay(value: number): number {
    if (TimeLibrary.getMonthDayNow() + value > TimeLibrary.getDaysInMonth()) {
      return (TimeLibrary.getMonthDayNow() + value) % TimeLibrary.getDaysInMonth();
    }
    return TimeLibrary.getMonthDayNow() + value;
  }

  static addMonth(value: number): number {
    if (TimeLibrary.getMonthDayNow() + value > TimeLibrary.getDaysInMonth()) {
      return (TimeLibrary.getMonthNow() + 1) % 12;
    }
    return TimeLibrary.getMonthNow();
  }

  static getHoursFormat(): string {
    const hours: number = new Date().getHours();
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  static getMinutesFormat(): string {
    const minutes: number = new Date().getMinutes();
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  static getSecondsFormat(): string {
    const seconds: number = new Date().getSeconds();
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  static getDaysInMonth(year: number = TimeLibrary.getYearNow(), month: number = TimeLibrary.getMonthNow()): number {
    const currentDate: number = new Date(year, month, 1).getTime();
    const nextDate: number = new Date(year, month + 1, 1).getTime();
    return Math.round((nextDate - currentDate) / 1000 / 3600 / 24);
  }

  static getSundayDate(
    year: number = TimeLibrary.getYearNow(), month: number = TimeLibrary.getMonthNow(), daysInMonth: number,
  ): number {
    const currentDay: number = new Date(year, month, 1).getDay();
    if (currentDay === 0) {
      return 1;
    }
    return daysInMonth - currentDay + 1;
  }

  static getNameMonth(month: number): string {
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

  static getNameDay(day: number): string {
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
}
