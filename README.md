# Scribe.js - Data Validator in JavaScript

Scribe.js is a lightweight library for validating data in JavaScript easily and efficiently. It provides a set of predefined rules to ensure data meets specific criteria.

## Installation

Currently, Scribe.js is not available on npm. You can use it by downloading the files and integrating them directly into your project.

## Usage

### Import

```javascript
import Scribe from './index.js';
```

### Example Usage

```javascript
const data = {
    name: "John",
    age: 25,
    birthDate: "2025-01-31"
};

const rules = {
    name: ["required"],
    age: ["required", "integer", "min:18", "max:65"],
    birthDate: ["required", "date", "today"]
};

const validator = new Scribe(data);
validator.validate(rules);

if (validator.passes()) {
    console.log("Validation successful", validator.validated());
} else {
    console.log("Validation errors", validator.getErrors());
}
```

## Validation Rules

Scribe.js provides various rules for data validation:

### General Rules

- `required`: The field cannot be empty.
- `nullable`: Allows the field to be null or empty.

### Numbers

- `number`: Checks if the value is a number.
- `integer`: Checks if the value is an integer.
- `float`: Checks if the value is a decimal number.
- `between:min,max`: Checks if the number is between `min` and `max`.
- `min:value`: Checks if the number is greater than or equal to `value`.
- `max:value`: Checks if the number is less than or equal to `value`.

### Dates

- `date`: Checks if the value is a valid date in `YYYY-MM-DD` format.
- `format:format`: Checks if the date follows the specified format (e.g., `dd/mm/yyyy`).
- `before:date`: Checks if the date is before the given date.
- `after:date`: Checks if the date is after the given date.
- `betweenDates:startDate,endDate`: Checks if the date is between two dates.
- `today`: Checks if the date is today.
- `tomorrow`: Checks if the date is tomorrow.
- `yesterday`: Checks if the date is yesterday.

### Strings

- `string`: Checks if the value is a string.
- `email`: Checks if the value is a valid email format.

## Contribution

If you want to improve this library, feel free to fork it and submit a pull request.
