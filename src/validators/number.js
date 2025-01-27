/**
 * Verify that value is a number
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is a number
 */
export function number(value) {
    return typeof value === 'number';
}

/**
 * Verify that value is an integer
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is an integer
 */
export function integer(value) {
    return Number.isInteger(value);
}

/**
 * Verify that value is a float
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is a float
 */
export function float(value) {
    return Number.isFinite(value) && !Number.isInteger(value);
}

/**
 * Verify that value is a number between two numbers
 * @param { any } value Value to validate
 * @param { Number } min Min value
 * @param { Number } max Max value
 * @returns { Boolean } True if the value is between the limits
 */
export function between(value, min, max) {
    return value >= min && value <= max;
}
