const addition = require("../calc").addition;
const divide = require("../calc").divide;
const subtract = require("../calc").subtract;

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
    });
});