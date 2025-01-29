import { nullableRule } from "./required";

/**
 * Verify that max length of a value is less than a number
 * @example { age: ["max:18"] }
 * @param { String | Number } value Value to validate
 * @param { ...args } max Max length of the value
 * @param { ...args } nullable Nullable value
 * @returns { Boolean } True if the value is less than the limit
 */
export function max(value, ...args) {
    const [max, nullableValue] = args;
    if (nullableRule(value, nullableValue)) return true;
    if (max === null || max === undefined) return false;
    if (typeof value === 'number') return value <= max;
    return value.length <= max;
}

/**
 * Verify that min length of a value is greater than a number
 * @example { age: ["max:18"] }
 * @param { String | Number } value Value to validate
 * @param { ...args } min Min length of the value
 * @param { ...args } nullable Nullable value
 * @returns { Boolean } True if the value is greater than the limit
 */
export function min(value, ...args) {
    const [min, nullableValue] = args;
    if (nullableRule(value, nullableValue)) return true;
    if (min === null || min === undefined) return false;
    if (typeof value === 'number') return value >= min;
    return value.length >= min;
}
