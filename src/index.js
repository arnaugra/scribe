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

    /**
     * Validate the data following the rules given by an object
     * @param { Object } rules
     * @returns { void }
     */
    validate(rules) {
        Object.keys(rules).forEach(field => {
            const rulesArray = rules[field];

            rulesArray.forEach(rule => {
                const [ruleName, ...params] = rule.split(':');

                if (validators[ruleName]) {
                    const parsedParams = params.map(param => isNaN(param) ? param : parseInt(param));
                    const nullable = rulesArray.includes('nullable');
                    const result = validators[ruleName](this.#data[field], ...parsedParams, ...nullable ? [nullable] : []);

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

    /**
     * Verify if the data passes the validation
     * @returns { boolean }
     */
    passes() {
        return Object.keys(this.#errors).length === 0;
    }

    /**
     * Get the validated data
     * @returns { Object }
     */
    validated() {
        return this.#validated;
    }

    /**
     * Get the errors of the validation
     * @returns { Object }
     */
    getErrors() {
        return this.#errors;
    }
}
