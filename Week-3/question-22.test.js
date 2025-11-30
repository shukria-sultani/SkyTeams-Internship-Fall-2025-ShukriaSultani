// Author :Shukria Sultani
// Date:  11/30/2025
// Problem: Write tests for the function that create Collatz sequence 

import { hailstoneNumbers } from "./question-22.js";

test("Should handle a basic input", ()=>{
    expect(hailstoneNumbers(6)).toEqual([  6, 3, 10, 5, 16,
  8, 4,  2, 1])
})
test("Should handle zero and negative inputs with error message", ()=>{
    expect(hailstoneNumbers(0)).toBe("Input must be a non-zero, positive number.")
    expect(hailstoneNumbers(-10)).toBe("Input must be a non-zero, positive number.")
})
test("Should handle non-numeric inputs with error message", ()=>{
  expect(hailstoneNumbers("abc")).toBe("Input must be a number.")
  expect(hailstoneNumbers(null)).toBe("Input must be a number.")
  expect(hailstoneNumbers(undefined)).toBe("Input must be a number.")
})