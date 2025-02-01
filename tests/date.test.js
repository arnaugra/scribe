import { isDate, format, before, after, between, today, tomorrow, yesterday } from '../src/validators/date.js';

describe("Date validation functions", () => {
    test("isDate() should return true for valid dates", () => {
        expect(isDate("2025-01-31")).toBe(true);
        expect(isDate("2000-02-29")).toBe(true); // Año bisiesto
    });

    test("isDate() should return false for invalid dates", () => {
        expect(isDate("invalid-date")).toBe(false);
        expect(isDate("2025-02-30")).toBe(false); // Día inexistente
        expect(isDate(123456)).toBe(false);
    });

    test("format() should validate dates with correct format", () => {
        expect(format("31/01/2025", "dd/mm/yyyy")).toBe(true);
        expect(format("2025-01-31", "yyyy-mm-dd")).toBe(true);
    });

    test("format() should return false for incorrect formats", () => {
        expect(format("31-01-2025", "yyyy/mm/dd")).toBe(false);
        expect(format("2025/31/01", "yyyy-mm-dd")).toBe(false);
    });

    test("before() should return true if the date is before the given date", () => {
        expect(before("2024-01-30", "2025-01-31")).toBe(true);
        expect(before("2026-01-01", "2025-01-31")).toBe(false);
    });

    test("after() should return true if the date is after the given date", () => {
        expect(after("2026-01-01", "2025-01-31")).toBe(true);
        expect(after("2024-01-30", "2025-01-31")).toBe(false);
    });

    test("between() should return true if the date is within the range", () => {
        expect(between("2025-01-31", "2025-01-01", "2025-12-31")).toBe(true);
        expect(between("2024-12-31", "2025-01-01", "2025-12-31")).toBe(false);
    });

    test("today() should return true for the current date", () => {
        const todayDate = new Date().toISOString().split('T')[0];
        expect(today(todayDate)).toBe(true);
    });

    test("tomorrow() should return true for the next day", () => {
        const tomorrowDate = new Date();
        tomorrowDate.setDate(tomorrowDate.getDate() + 1);
        expect(tomorrow(tomorrowDate.toISOString().split('T')[0])).toBe(true);
    });

    test("yesterday() should return true for the previous day", () => {
        const yesterdayDate = new Date();
        yesterdayDate.setDate(yesterdayDate.getDate() - 1);
        expect(yesterday(yesterdayDate.toISOString().split('T')[0])).toBe(true);
    });
});
