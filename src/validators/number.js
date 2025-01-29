import { nullableRule } from "./required";

/**
 * Verify that value is a number
 * @param { any } value Value to validate
 * @param { ...args } nullable Nullable value
 * @returns { Boolean } True if the value is a number
 */
export function number(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return typeof value === 'number';
}

/**
 * Verify that value is an integer
 * @param { any } value Value to validate
 * @param { ...args } nullable Nullable value
 * @returns { Boolean } True if the value is an integer
 */
export function integer(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return Number.isInteger(value);
}

/**
 * Verify that value is a float
 * @param { any } value Value to validate
 * @param { ...args } nullable Nullable value
 * @returns { Boolean } True if the value is a float
 */
export function float(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return Number.isFinite(value) && !Number.isInteger(value);
}

/**
 * Verify that value is a number between two numbers
 * @param { any } value Value to validate
 * @param { ...args } min Min value
 * @param { ...args } max Max value
 * @param { ...args } nullable Nullable value
 * @returns { Boolean } True if the value is between the limits
 */
export function between(value, ...args) {
    const [min, max, nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return value >= min && value <= max;
}
