import { validators } from './validators/validators.js';

/**
 * Scribe - Class:
 * Validate data following a set of rules
 * 
 * Methods:
 * - validate(rules): Validate the data following the rules given by array
 * - passes(): Verify if the data passes the validation
 * - getErrors(): Get the errors of the validation
 */
export default class Scribe {
    constructor(data) {
        this.data = data;
        this.errors = {};
    }

    validate(rules) {
        Object.keys(rules).forEach(field => {
            const rulesArray = rules[field];

            rulesArray.forEach(rule => {
                const result = validators[rule](this.data[field]);
                
                if (!result) {
                    if (!this.errors[field]) this.errors[field] = [];
                    this.errors[field].push(`${field}: ${rule}`);
                }
            });
        });
    }

    passes() {
        return Object.keys(this.errors).length === 0;
    }

    getErrors() {
        return this.errors;
    }
}
