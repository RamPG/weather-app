export default class TimeLibrary {

  static getWeekDayNow() {
    return new Date().getDay();
  }

  static getMonthNow() {
    return new Date().getMonth();
  }

  static getYearNow() {
    return new Date().getFullYear();
  }

  static getMonthDayNow() {
    return new Date().getDate();
  }

  static addWeekDay(value) {
    return (TimeLibrary.getWeekDayNow() + value) % 7;
  }

  static addMonthDay(value) {
    if (TimeLibrary.getMonthDayNow() + value > TimeLibrary.getDaysInMonth()) {
      return (TimeLibrary.getMonthDayNow() + value) % TimeLibrary.getDaysInMonth()
    }
    return TimeLibrary.getMonthDayNow() + value;
  }

  static addMonth(value) {
    if (TimeLibrary.getMonthDayNow() + value > TimeLibrary.getDaysInMonth()) {
      return (TimeLibrary.getMonthNow() + 1) % 12;
    }
    return TimeLibrary.getMonthNow();
  }

  static getHoursFormat() {
    const hours = new Date().getHours();
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  static getMinutesFormat() {
    const minutes = new Date().getMinutes();
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  }

  static getSecondsFormat() {
    const seconds = new Date().getSeconds();
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
  }

  static getDaysInMonth(year = TimeLibrary.getYearNow(), month = TimeLibrary.getMonthNow()) {
    const currentDate = new Date(year, month, 1).getTime();
    const nextDate = new Date(year, month + 1, 1).getTime();
    return Math.round((nextDate - currentDate) / 1000 / 3600 / 24);
  }

  static getSundayDate(current = new Date(), daysInMonth) {
    const currentDay = new Date(current.year, current.month, 1).getDay();
    if (currentDay === 0) {
      return 1;
    }
    return daysInMonth - currentDay + 1;
  }

  static getNameMonth(month) {
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

  static getNameDay(day) {
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
