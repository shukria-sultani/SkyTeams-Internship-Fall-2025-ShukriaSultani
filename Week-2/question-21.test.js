// Author: Shukria Sultani
//Date:  11/22/2025
// Problem: Write tests for the function that calculates the digits of a number.

import { sumDigits } from "./question-21.js";

test("Should handle a basic input", () => {
  expect(sumDigits(2345)).toBe(14);
});
test("Should return error message for non-numeric inputs", () => {
  expect(sumDigits("123")).toBe("Input must be a number.");
  expect(sumDigits("cbs")).toBe("Input must be a number.");
  expect(sumDigits(null)).toBe("Input must be a number.");
  expect(sumDigits(undefined)).toBe("Input must be a number.");
});
test("Should handle single digit inputs", () => {
  expect(sumDigits(0)).toBe(0);
  expect(sumDigits(9)).toBe(9);
});

test("Should handle large integer inputs", () => {
  expect(sumDigits(1234567890)).toBe(45);
});
test("Should handle negative numbers", () => {
  expect(sumDigits(-123)).toBe(6);
});
