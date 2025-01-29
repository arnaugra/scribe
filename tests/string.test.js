import { string, email } from '../src/validators/string.js';

test('string if null', () => {
    expect(string(null)).toBe(false);
});

test('string if undefined', () => {
    expect(string(undefined)).toBe(false);
});

test('string if empty string', () => {
    expect(string('')).toBe(true);
});

test('string if has value', () => {
    expect(string('not empty')).toBe(true);
});

test('string if is a number', () => {
    expect(string(1312)).toBe(false);
});

test('email if null', () => {
    expect(email(null)).toBe(false);
});

test('email if undefined', () => {
    expect(email(undefined)).toBe(false);
});

test('email if empty string', () => {
    expect(email('')).toBe(false);
});

test('email if has value', () => {
    expect(email('not empty')).toBe(false);
});

test('email if is a number', () => {
    expect(email(1312)).toBe(false);
});

test('email if is a valid email', () => {
    expect(email('valid@email.yes')).toBe(true);
});

test('email if is not a valid email', () => {
    expect(email('invalid@email')).toBe(false);
});

test('email if is not a valid email but can be null', () => {
    expect(email('', [true])).toBe(true);
});