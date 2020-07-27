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

  static getDaysInMonth(current) {
    const { year, month } = current;
    const currentDate = new Date(year, month, 1).getTime();
    const nextDate = new Date(year, month + 1, 1).getTime();
    return Math.round((nextDate - currentDate) / 1000 / 3600 / 24);
  }

  static getSundayDate(current, daysInMonth) {
    const currentDay = new Date(current.year, current.month, 1).getDay();
    if (currentDay === 0) {
      return 1;
    }
    return daysInMonth - currentDay + 1;
  }

  getCalendar(current) {
    const { year, month } = current;
    const currentDaysInMonth = TimeLibrary.getDaysInMonth({ year, month });
    let prevDaysInMonth = TimeLibrary.getDaysInMonth({ year, month: month - 1 });
    let currentDay = TimeLibrary.getSundayDate({ year, month }, prevDaysInMonth);
    let flagDayInMonth = false;
    let className = 'btn btn-warning btn-block';
    if (currentDay === 1) {
      prevDaysInMonth = currentDaysInMonth;
      flagDayInMonth = true;
      className = 'btn btn-success btn-block';
    }
    const calendar = [];
    for (let i = 0; i < 6; i++) {
      const newWeek = [];
      for (let j = 0; j < 7; j++) {
        newWeek.push({ day: currentDay, classButton: className });
        currentDay += 1;
        if (currentDay > prevDaysInMonth) {
          flagDayInMonth = !flagDayInMonth;
          className = flagDayInMonth ? 'btn btn-success btn-block' : 'btn btn-warning btn-block';
          currentDay = 1;
          prevDaysInMonth = currentDaysInMonth;
        }
      }
      calendar.push(newWeek);
    }
    if (year === TimeLibrary.getYearNow() && month === TimeLibrary.getMonthNow()) {
      let startPosJ = new Date(year, month, 1).getDay();
      for (let i = 0; i < 5; i++) {
        for (let j = startPosJ; j < 7; j++) {
          if (calendar[i][j].day === TimeLibrary.getMonthDayNow()) {
            calendar[i][j].classButton = 'btn btn-danger btn-block';
            break;
          }
          startPosJ = 0;
        }
      }
    }
    return calendar;
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
