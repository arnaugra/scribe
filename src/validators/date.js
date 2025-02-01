import { nullableRule } from "./required";

/**
 * Verify that value is a date
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @returns { Boolean } True if the value is a date
 */
export function isDate(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;

    if (typeof value !== "string") return false;

    // guard clause to check if the value is a date
    const timestamp = Date.parse(value);
    if (isNaN(timestamp)) return false;

    const parsedDate = new Date(timestamp);

    // get the year, month, and day
    const year = parsedDate.getFullYear();
    const month = parsedDate.getMonth() + 1; // JS months are 0 based
    const day = parsedDate.getDate();

    // get the delimiter
    const delimiter = value.includes("/") ? "/" : value.includes("-") ? "-" : value.includes(".") ? "." : null;
    if (!delimiter) return false;

    const parts = value.split(delimiter).map(Number);
    if (parts.length !== 3) return false;

    // check if the date is valid
    return parts.includes(year) && parts.includes(month) && parts.includes(day);
}

/**
 * Verify that value is a date and is the format as the format given
 * @param { any } value Value to validate
 * @param { String } format Format to compare accepted format separated by '/' and '-'
 * @returns { Boolean } True if the value is a date and is the same as the format given
 */
export function format(value, ...args) {
    const [format, nullable] = args;
    if (nullableRule(value, nullable)) return true;

    // Get the delimiters from the format
    const delimiters = format.match(/[^a-zA-Z]/g)?.join('') || '';
    const escapedDelimiters = delimiters.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Split format and determine positions
    const formatParts = format.split(new RegExp(`[${escapedDelimiters}]`));
    const valueParts = value.split(new RegExp(`[${escapedDelimiters}]`));

    if (formatParts.length !== 3 || valueParts.length !== 3) return false;

    const regex = new RegExp(
        `^\\d{${formatParts[0].length}}[${escapedDelimiters}]\\d{${formatParts[1].length}}[${escapedDelimiters}]\\d{${formatParts[2].length}}$`
    );

    // Guard clause
    if (!regex.test(value)) return false;

    // Get index for day, month, and year
    let dayIndex = formatParts.indexOf("dd");
    let monthIndex = formatParts.indexOf("mm");
    let yearIndex = formatParts.indexOf("yyyy");

    // Extract numerical values
    const day = Number(valueParts[dayIndex]);
    const month = Number(valueParts[monthIndex]) - 1; // JS months are 0 based
    const year = Number(valueParts[yearIndex]);

    // Validate real date
    const date = new Date(year, month, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day
    );
}

/**
 * Verify that value is a date and is before the given date
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @param { String } date Date to compare
 * @returns { Boolean } True if the value is a date and is before the given date
 */
export function before(value, ...args) {
    const [date, nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return isDate(value) && Date.parse(value) < Date.parse(date);
}

/**
 * Verify that value is a date and is after the given date
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @param { String } date Date to compare
 * @returns { Boolean } True if the value is a date and is after the given date
 */
export function after(value, ...args) {
    const [date, nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return isDate(value) && Date.parse(value) > Date.parse(date);
}

/**
 * Verify that value is a date and is between the given dates
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @param { String } start Start date to compare
 * @param { String } end End date to compare
 * @returns { Boolean } True if the value is a date and is between the given dates
 */
export function betweenDates(value, ...args) {
    const [start, end, nullable] = args;
    if (nullableRule(value, nullable)) return true;
    return isDate(value) && Date.parse(value) > Date.parse(start) && Date.parse(value) < Date.parse(end);
}

/**
 * Verify that value is a date and is the same as the current date
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @returns { Boolean } True if the value is a date and is the same as the current date
 */
export function today(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;
    if (!isDate(value)) return false;
    const todayDate = new Date()
    todayDate.setHours(0, 0, 0, 0); 
    const valueDate = new Date(value)
    valueDate.setHours(0, 0, 0, 0);

    return todayDate.getTime() === valueDate.getTime();
}

/**
 * Verify that value is a date and is the same as tomorrow
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @returns { Boolean } True if the value is a date and is the same as tomorrow
 */
export function tomorrow(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;
    if (!isDate(value)) return false;

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const tomorrowDate = new Date(todayDate);
    tomorrowDate.setDate(todayDate.getDate() + 1);
    const valueDate = new Date(value);
    valueDate.setHours(0, 0, 0, 0);

    return tomorrowDate.getTime() === valueDate.getTime();
}

/**
 * Verify that value is a date and is the same as yesterday
 * @param { any } value Value to validate (YYYY-MM-DD)
 * @returns { Boolean } True if the value is a date and is the same as yesterday
 */
export function yesterday(value, ...args) {
    const [nullable] = args;
    if (nullableRule(value, nullable)) return true;
    if (!isDate(value)) return false;

    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    const yesterdayDate = new Date(todayDate);
    yesterdayDate.setDate(todayDate.getDate() - 1);
    const valueDate = new Date(value);
    valueDate.setHours(0, 0, 0, 0);

    return yesterdayDate.getTime() === valueDate.getTime();
}
