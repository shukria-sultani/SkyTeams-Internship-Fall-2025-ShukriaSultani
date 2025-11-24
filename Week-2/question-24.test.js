// Author: Shukria Sultani
// Date: 11/23/2025
// Problem: Write tests for the function that finds GCD of two numbers

import { findGCD } from "./question-24.js";
test("Should handle a basic input", () => {
    expect(findGCD(18, 12)).toBe(6); 
});

test("Should return error message for non-numeric inputs", () => {
    expect(findGCD(20, "5")).toBe("Inputs must be number.");
    expect(findGCD("20", 5)).toBe("Inputs must be number.");
    expect(findGCD(null, 5)).toBe("Inputs must be number.");
    expect(findGCD(undefined, 5)).toBe("Inputs must be number.");
});
test("Should handle zero with error message.", () => {
    expect(findGCD(0, 15)).toBe("Inputs must be positive numbers, greater than 0");
    expect(findGCD(10, 0)).toBe("Inputs must be positive numbers, greater than 0");
});

test("Should handle negative numbers with error message", () => {
    expect(findGCD(-50, -10)).toBe("Inputs must be positive numbers, greater than 0"); 
});

test("Should correctly find GCD for simple numbers", () => {
    expect(findGCD(84, 10)).toBe(2);
});

test("Should handle prime numbers correctly", () => {
    expect(findGCD(17, 13)).toBe(1);
});

test("Should return the smaller number if the larger is a multiple of the smaller", () => {
    expect(findGCD(100, 10)).toBe(10);
    expect(findGCD(10, 100)).toBe(10);
});

test("Should handle large numbers", () => {
    expect(findGCD(270, 192)).toBe(6); 
});

test("Should return an error for inputs that are not integers", () => {
    expect(findGCD(10.5, 20)).toBe("Inputs must be whole numbers.");
    expect(findGCD(15, 7.2)).toBe("Inputs must be whole numbers.");
});

test("Should handle identical positive numbers", () => {
    expect(findGCD(5, 5)).toBe(5);
});
