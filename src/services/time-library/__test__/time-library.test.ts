import {
  getHoursFormat, getMinutesFormat, getNameDay,
  addMonthDay, getNameMonth, addMonth,
  addWeekDay, getMonthDay, getMonth,
  getYear, getWeekDay, getSecondsFormat,
  getLastSundayMonthDate, getSeconds,
  getMinutes, getHours, addHours,
  addMinutes, addSeconds,
} from '../time-library';

describe('time library', () => {
  it('getHoursFormat return right value', () => {
    expect(getHoursFormat(5)).toBe('05');
  });
  it('getMinutesFormat return right value', () => {
    expect(getMinutesFormat(10)).toBe('10');
  });
  it('getNameDay return right value', () => {
    expect(getNameDay(1)).toBe('Monday');
  });
  it('addMonthDay return right value', () => {
    expect(addMonthDay(5, 25, 29)).toBe(1);
  });
  it('getNameMonth return right value', () => {
    expect(getNameMonth(0)).toBe('January');
  });
  it('addMonth return right value', () => {
    expect(addMonth(2, 5, 30, 31, 5)).toBe(8);
  });
  it('addWeekDay return right value', () => {
    expect(addWeekDay(3, 6)).toBe(2);
  });
  it('getMonthDay return right value', () => {
    expect(getMonthDay(new Date(2020, 5, 10))).toBe(10);
  });
  it('getMonth return right value', () => {
    expect(getMonth(new Date(2020, 5, 10))).toBe(5);
  });
  it('getYear return right value', () => {
    expect(getYear(new Date(2020, 5, 10))).toBe(2020);
  });
  it('getWeekDay return right value', () => {
    expect(getWeekDay(new Date(2020, 7, 7))).toBe(5);
  });
  it('getSecondsFormat return right value', () => {
    expect(getSecondsFormat(9)).toBe('09');
  });
  it('getFirstSundayDate return right value', () => {
    expect(getLastSundayMonthDate(2020, 7, 31)).toBe(26);
  });
  it('getSeconds return right value', () => {
    expect(getSeconds(new Date(2020, 7, 7, 7, 6, 5))).toBe(5);
  });
  it('getMinutes return right value', () => {
    expect(getMinutes(new Date(2020, 7, 7, 7, 6, 5))).toBe(6);
  });
  it('getHours return right value', () => {
    expect(getHours(new Date(2020, 9, 8, 7, 6, 5))).toBe(7);
  });
  it('addSeconds return right value', () => {
    expect(addSeconds(1, 59)).toBe(0);
  });
  it('addMinutes return right value', () => {
    expect(addMinutes(59, 35, 1, 25)).toBe(1);
  });
  it('addHours return right value', () => {
    expect(addHours(59, 22, 1, 2)).toBe(1);
  });
});
