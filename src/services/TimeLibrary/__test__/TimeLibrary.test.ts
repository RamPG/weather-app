import {
  getHoursFormat, getMinutesFormat, getNameDay,
  addMonthDay, getNameMonth, addMonth,
  addWeekDay, getMonthDay, getMonth,
  getYear, getWeekDay, getSecondsFormat,
  getLastSundayMonthDate,
} from '../TimeLibrary';

describe('time library', () => {
  it('getHoursFormat test', () => {
    expect(getHoursFormat(5)).toBe('05');
  });
  it('getMinutesFormat test', () => {
    expect(getMinutesFormat(10)).toBe('10');
  });
  it('getNameDay test', () => {
    expect(getNameDay(1)).toBe('Monday');
  });
  it('addMonthDay test', () => {
    expect(addMonthDay(5, 25, 29)).toBe(1);
  });
  it('getNameMonth test', () => {
    expect(getNameMonth(0)).toBe('January');
  });
  it('addMonth test', () => {
    expect(addMonth(5, 30, 31, 5)).toBe(6);
  });
  it('addWeekDay test', () => {
    expect(addWeekDay(3, 6)).toBe(2);
  });
  it('getMonthDay test', () => {
    expect(getMonthDay(new Date(2020, 5, 10))).toBe(10);
  });
  it('getMonth test', () => {
    expect(getMonth(new Date(2020, 5, 10))).toBe(5);
  });
  it('getYear test', () => {
    expect(getYear(new Date(2020, 5, 10))).toBe(2020);
  });
  it('getWeekDay test', () => {
    expect(getWeekDay(new Date(2020, 7, 7))).toBe(5);
  });
  it('getSecondsFormat test', () => {
    expect(getSecondsFormat(9)).toBe('09');
  });
  it('getFirstSundayDate test', () => {
    expect(getLastSundayMonthDate(2020, 7, 31)).toBe(26);
  });
});
