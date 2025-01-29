import { required, nullable } from './required.js';
import { string, email } from './string.js';
import { min, max } from './minMax.js';
import { number, integer, float, between  } from './number.js';

/**
 * Validators
 */
export const validators = {
    required,
    string,
    email,
    min,
    max,
    number,
    integer,
    float,
    between,
    nullable,
};
