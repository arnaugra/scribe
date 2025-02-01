import { required, nullable } from './required.js';
import { string, email } from './string.js';
import { min, max } from './minMax.js';
import { number, integer, float, between  } from './number.js';
import { isDate, format, before, after, betweenDates, today, tomorrow, yesterday } from './date.js';

/**
 * Validators
 */
export const validators = {
    required,
    nullable,
    string,
    email,
    min,
    max,
    number,
    integer,
    float,
    between,
    isDate,
    format,
    before,
    after,
    betweenDates,
    today,
    tomorrow,
    yesterday
};
