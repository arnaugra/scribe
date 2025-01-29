import { nullableRule } from "./required";

/**
 * Verify that value is a string
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is a string
 */
export function string(value, ...nullable) {
    const [nullableValue] = nullable;
    if (nullableRule(value, nullableValue)) return true;
    return typeof value === 'string';
}

/**
 * Verify that value is an email
 * @param { any } value Value to validate
 * @returns { Boolean } True if the value is an email
 */
export function email(value, ...nullable) {
    const [nullableValue] = nullable;
    if (nullableRule(value, nullableValue)) return true;
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
}
