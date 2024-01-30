const addition = require("../calc").addition;
const divide = require("../calc").divide;
const subtract = require("../calc").subtract;
const multiply = require("../calc").multiply;

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 80 for 20 + 20", () => {
            expect(addition(40, 40)).toBe(80);
        });
    });
    describe("Divide function", () => {
        test("should return 5 for 10 / 2", () => {
            expect(divide(10, 2)).toBe(5);
        });
    });
    describe("Subtract function", () => {
        test("should return 20 for 35 - 15", () => {
            expect(subtract(35, 15)).toBe(20);
        });
        test("should return 2 when 5 -3", () => {
            expect(subtract(5, 3)).toBe(2);
        })
    });
    describe("Multiply function", () => {
        test("should return 20 for 10*2", () => {
            expect(multiply(10, 2)).toBe(20);
        })
    })
    describe("input validation", () => {
        test("should return NaN for string input", () => {
            expect(isNaN(addition('abc', 'def'))).toBe(true);
            expect(isNaN(divide('abc', 'def'))).toBe(true);
            expect(isNaN(subtract('abc', 'def'))).toBe(true);
            expect(isNaN(multiply('abc', 'def'))).toBe(true);
        })
    })
});