// Author: Shukria Sultani
// Date: 11/20/2025
// Problem: Write tests for the function that counts digits in a number.

import { countDigits } from "./question-20.js"; 

test("Should handle basic positive integer inputs", () => {
    expect(countDigits(23456)).toBe(5); 
    expect(countDigits(1234)).toBe(4);
    expect(countDigits(7)).toBe(1);
});

test("Should handle numbers with trailing zeros", () => {
    expect(countDigits(100000)).toBe(6);
    expect(countDigits(90)).toBe(2);
});

test("Should correctly handle zero", () => {
    expect(countDigits(0)).toBe(1);
});

test("Should handle negative integers, counting only the digits", () => {
    expect(countDigits(-20)).toBe(2);
    expect(countDigits(-12345)).toBe(5);
    expect(countDigits(-9)).toBe(1);
});

test("Should return error message for non-numeric inputs", () => {
    const expectedError = "Input must be a number.";

    expect(countDigits("123")).toBe(expectedError);
    expect(countDigits("abc")).toBe(expectedError);
    expect(countDigits(null)).toBe(expectedError);
    expect(countDigits(undefined)).toBe(expectedError); 
    expect(countDigits(true)).toBe(expectedError);

    expect(countDigits({})).toBe(expectedError);
    expect(countDigits([])).toBe(expectedError);
});

test("Should handle decimals by counting all digits before the decimal", () => {
    expect(countDigits(234.56)).toBe(3);
    expect(countDigits(1.99)).toBe(1);
    expect(countDigits(-12.34)).toBe(2);
});