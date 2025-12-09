// Author: Shukria Sultani
// Date: 11/22/2025
// Problem: Write tests for the function that return the even numbers in a range.

import { getEvenNumbers } from "./question-22.js";

test("Should handle a basic input", () => {
  expect(getEvenNumbers(1, 10)).toEqual([2, 4, 6, 8, 10]);
});
test("Should return error message for non-numeric inputs", () => {
  let errorMessage = "Inputs should be numbers.";
  expect(getEvenNumbers("1", 5)).toBe(errorMessage);
  expect(getEvenNumbers(2, "10")).toBe(errorMessage);
  expect(getEvenNumbers(3, null)).toBe(errorMessage);
  expect(getEvenNumbers(undefined, 20)).toBe(errorMessage);
});
test("Should handle inputs start and end with odd number", ()=>{
    expect(getEvenNumbers(5, 15)).toEqual([6, 8, 10, 12, 14])
})
test("Should handle 0", () => {
  expect(getEvenNumbers(0, 6)).toEqual([0, 2, 4, 6]);
});
test("Should handle negative numbers", () => {
  expect(getEvenNumbers(-12, -4)).toEqual([-12, -10, -8, -6, -4]);
});
test("Should handle a range that crosses zero", () => {
  expect(getEvenNumbers(-3, 3)).toEqual([-2, 0, 2]);
});

test("Should handle a single-number range", () => {
  expect(getEvenNumbers(4, 4)).toEqual([4]);
  expect(getEvenNumbers(3, 3)).toEqual([]);
});
test("Should handle a reversed range (start > end) with error message", () => {
    expect(getEvenNumbers(20, 2)).toBe("The start number should be smaller than or equal to the end number.");
});
