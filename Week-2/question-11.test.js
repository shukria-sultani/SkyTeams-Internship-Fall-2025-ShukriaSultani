// Author : Shukria Sultani
// Date: 11/19/2025
// Problem: Write tests for the function that calculate two numbers based on an operator.

import { calculate } from "./question-11.js";

test("Should do addition on a basic input",()=>{
    expect(calculate(2, 5, "+")).toBe(7)
})
test("Should do subtraction on a basic input",()=>{
    expect(calculate(10, 5, "-")).toBe(5)
})
test("Should do multiplication on a basic input",()=>{
    expect(calculate(2, 4, "*")).toBe(8)
})
test("Should do division on a basic input",()=>{
    expect(calculate(6, 3, "/")).toBe(2)
})

test("Should handle division by zero correctly", () => {
    expect(calculate(10, 0, "/")).toBe(Infinity);
});

test("Should return zero when multiplying by zero", () => {
    expect(calculate(5, 0, "*")).toBe(0);
});

test("Should correctly handle negative numbers in addition", () => {
    expect(calculate(-5, 10, "+")).toBe(5);
});

test("Should handle floating point numbers (addition)", () => {
    expect(calculate(0.1, 0.2, "+")).toBeCloseTo(0.3);
});

test("Should return error message for invalid operator symbol", () => {
    expect(calculate(2, 3, "]")).toBe("Operator is not valid.");
    expect(calculate(2, 3, "add")).toBe("Operator is not valid.");
});
test("Should return error message for non-numeric string inputs", () => {
    expect(calculate(2, "g", "+")).toBe("Inputs should be numbers.");
    expect(calculate("h", "g", "/")).toBe("Inputs should be numbers.");
});

test("Should return error message for non-number inputs like null or undefined", () => {
    expect(calculate(null, 5, "+")).toBe("Inputs should be numbers.");
    expect(calculate(5, undefined, "*")).toBe("Inputs should be numbers.");
});

test("Should handle large numbers without issues", () => {
    const largeNum1 = 1000000000000000;
    const largeNum2 = 5;
    expect(calculate(largeNum1, largeNum2, "*")).toBe(5000000000000000);
});
