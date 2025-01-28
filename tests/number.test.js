import { number, integer, float, between  } from '../src/validators/number.js';

test('number if value is null', () => {
    expect(number(null)).toBe(false);
});

test('number if value is undefined', () => {
    expect(number(undefined)).toBe(false);
});

test('number if value is a number', () => {
    expect(number(1)).toBe(true);
});

test('number if value is a string', () => {
    expect(number('1')).toBe(false);
});

test('integer if value is a number', () => {
    expect(integer(1)).toBe(true);
});

test('integer if value is a float', () => {
    expect(integer(1.1)).toBe(false);
});

test('float if value is a number', () => {
    expect(float(1)).toBe(false);
});

test('float if value is a float', () => {
    expect(float(1.1)).toBe(true);
});

test('between if value is between the limits', () => {
    expect(between(5, 1, 10)).toBe(true);
});

test('between if value is below the limits', () => {
    expect(between(0, 1, 10)).toBe(false);
});

test('between if value is above the limits', () => {
    expect(between(11, 1, 10)).toBe(false);
});
