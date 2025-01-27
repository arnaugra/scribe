/**
 * Verify that exists a value
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is not undefined, null or empty
 */
export function required(value) {
    return value !== undefined && value !== null && value !== '';
}
