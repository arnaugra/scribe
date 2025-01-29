/**
 * Verify that exists a value
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is not undefined, null or empty
 */
export function required(value) {
    return value !== undefined && value !== null && value !== '';
}

/**
 * Verify that value can be a nullish value
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is null, undefined, empty or has a value
 */
export function nullable(value) {
    return true;
}

/**
 * Validate if field must be nullable
 * @param { any } value Value to validate
 * @param { String } nullable Rules to validate
 */
export function nullableRule(value, nullable) {
    return nullable && (value === undefined || value === null || value === '');
}
