/**
 * Verify that value is a string
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is a string
 */
export function string(value) {
    return typeof value === 'string';
}

/**
 * Verify that value is an email
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is an email
 */
export function email(value) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
}
