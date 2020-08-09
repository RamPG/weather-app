import {
  getHoursFormat, getMinutesFormat, getNameDay,
  addMonthDay, getNameMonth, addMonth,
  addWeekDay, getMonthDay, getMonth,
  getYear, getWeekDay, getSecondsFormat,
  getLastSundayMonthDate,
} from '../TimeLibrary';

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
    expect(addMonth(5, 30, 31, 5)).toBe(6);
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
});
