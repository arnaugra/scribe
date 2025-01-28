import { min, max } from '../src/validators/minMax.js';

test('min if value is null', () => {
    expect(min(2, null)).toBe(false);
});

test('min if value is undefined', () => {
    expect(min(2, undefined)).toBe(false);
});

test('min if value is a number and is less than min', () => {
    expect(min(1, 2)).toBe(false);
});

test('min if value is a number and is equal to min', () => {
    expect(min(2, 2)).toBe(true);
});

test('min if value is a number and is greater than min', () => {
    expect(min(3, 2)).toBe(true);
});

test('min if value is empty string', () => {
    expect(min('', 2)).toBe(false);
});

test('min if value is a string and is less than min', () => {
    expect(min('a', 2)).toBe(false);
});

test('min if value is a string and is equal to min', () => {
    expect(min('ab', 2)).toBe(true);
});

test('min if value is a string and is greater than min', () => {
    expect(min('abc', 2)).toBe(true);
});

test('max if value is null', () => {
    expect(max(2, null)).toBe(false);
});

test('max if value is undefined', () => {
    expect(max(2, undefined)).toBe(false);
});

test('max if value is a number and is less than max', () => {
    expect(max(1, 2)).toBe(true);
});

test('max if value is a number and is equal to max', () => {
    expect(max(2, 2)).toBe(true);
});

test('max if value is a number and is greater than max', () => {
    expect(max(3, 2)).toBe(false);
});

test('max if value is empty string', () => {
    expect(max('', 2)).toBe(true);
});

test('max if value is a string and is less than max', () => {
    expect(max('a', 2)).toBe(true);
});

test('max if value is a string and is equal to max', () => {
    expect(max('ab', 2)).toBe(true);
});

test('max if value is a string and is greater than max', () => {
    expect(max('abc', 2)).toBe(false);
});
