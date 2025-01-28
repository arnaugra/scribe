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
    #data
    #validated
    #errors

    constructor(data) {
        this.#data = data;
        this.#validated = {};
        this.#errors = {};
    }

    validate(rules) {
        Object.keys(rules).forEach(field => {
            const rulesArray = rules[field];

            rulesArray.forEach(rule => {
                const [ruleName, param1, param2] = rule.split(':');

                if (validators[ruleName]) {
                    let result = false;
                    
                    if (param1 && param2) {
                        result = validators[ruleName](this.#data[field], parseInt(param1), parseInt(param2));
                    } else if (param1) {
                        result = validators[ruleName](this.#data[field], parseInt(param1));
                    } else {
                        result = validators[ruleName](this.#data[field]);
                    }

                    if (!result) {
                        if (!this.#errors[field]) this.#errors[field] = [];
                        this.#errors[field].push(ruleName);
                    } else {
                        if (!this.#validated[field]) this.#validated[field] = this.#data[field];
                    }
                }
            });
        });
    }

    passes() {
        return Object.keys(this.#errors).length === 0;
    }

    validated() {
        return this.#validated;
    }

    getErrors() {
        return this.#errors;
    }
}
