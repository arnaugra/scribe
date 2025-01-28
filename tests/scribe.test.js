import Scribe from '../src/index.js';

describe('Form validation', () => {

    test('should validate name with min and max length', () => {
        const validation = new Scribe({
            name: 'John',
            age: 25,
            email: 'email@email.com'
        });

        validation.validate({
            name: ['min:3', 'max:10'],
        });

        expect(validation.passes()).toBe(true);
        expect(validation.validated()).toStrictEqual({name: 'John'});
        expect(validation.getErrors()).toStrictEqual({});
    });

    test('should fail when name is too short', () => {
        const validation = new Scribe({
            name: 'Jo',
            age: 25,
            email: 'email@email.com'
        });

        validation.validate({
            name: ['min:3', 'max:10'],
        });

        expect(validation.passes()).toBe(false);
        expect(validation.getErrors()).toStrictEqual({name: ["min"]});
    });

    test('should fail when name is too long', () => {
        const validation = new Scribe({
            name: 'JonathanTheGreat',
            age: 25,
            email: 'email@email.com'
        });

        validation.validate({
            name: ['min:3', 'max:10'],
        });

        expect(validation.passes()).toBe(false);
        expect(validation.getErrors()).toStrictEqual({name: ["max"]});
    });

    test('should validate age is between 18 and 60', () => {
        const validation = new Scribe({
            name: 'John',
            age: 25,
            email: 'email@email.com'
        });

        validation.validate({
            age: ['between:18:60'],
        });

        expect(validation.passes()).toBe(true);
        expect(validation.validated()).toStrictEqual({age: 25});
        expect(validation.getErrors()).toStrictEqual({});
    });

    test('should fail when age is below 18', () => {
        const validation = new Scribe({
            name: 'John',
            age: 16,
            email: 'email@email.com'
        });

        validation.validate({
            age: ['between:18:60'],
        });

        expect(validation.passes()).toBe(false);
        expect(validation.getErrors()).toStrictEqual({age: ["between"]});
    });

    test('should fail when age is above 60', () => {
        const validation = new Scribe({
            name: 'John',
            age: 65,
            email: 'email@email.com'
        });

        validation.validate({
            age: ['between:18:60'],
        });

        expect(validation.passes()).toBe(false);
        expect(validation.getErrors()).toStrictEqual({age: ["between"]});
    });

    test('should validate valid email format', () => {
        const validation = new Scribe({
            name: 'John',
            age: 25,
            email: 'john.doe@email.com'
        });

        validation.validate({
            email: ['email'],
        });

        expect(validation.passes()).toBe(true);
        expect(validation.validated()).toStrictEqual({email: 'john.doe@email.com'});
        expect(validation.getErrors()).toStrictEqual({});
    });

    test('should fail when email format is invalid', () => {
        const validation = new Scribe({
            name: 'John',
            age: 25,
            email: 'john.doe-email.com'
        });

        validation.validate({
            email: ['email'],
        });

        expect(validation.passes()).toBe(false);
        expect(validation.getErrors()).toStrictEqual({email: ["email"]});
    });

    test('should pass when all fields are valid', () => {
        const validation = new Scribe({
            name: 'John',
            age: 25,
            email: 'john.doe@email.com'
        });

        validation.validate({
            name: ['min:3', 'max:10'],
            age: ['between:18:60'],
            email: ['email']
        });

        expect(validation.passes()).toBe(true);
        expect(validation.validated()).toStrictEqual({
            name: 'John',
            age: 25,
            email: 'john.doe@email.com'
        });
        expect(validation.getErrors()).toStrictEqual({});
    });

    test('should fail when required field is missing', () => {
        const validation = new Scribe({
            name: 'John',
            age: 25,
            email: ''
        });

        validation.validate({
            email: ['required', 'email'],
        });

        expect(validation.passes()).toBe(false);
        expect(validation.getErrors()).toStrictEqual({email: ["required", "email"]});
    });

});
