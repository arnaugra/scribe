import { required } from '../src/validators/required.js';

test('required if null', () => {
    expect(required(null)).toBe(false);
});

test('required if undefined', () => {
    expect(required(undefined)).toBe(false);
});

test('required if empty space', () => {
    expect(required('')).toBe(false);
});

test('required if has value', () => {
    expect(required('not empty')).toBe(true);
});

test('required if has number as value', () => {
    expect(required(1312)).toBe(true);
});
