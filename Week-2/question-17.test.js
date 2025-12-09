// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Write test for the function that calculates sum of first N natural numbers

import { sumNumbers } from "./question-17.js";

test("Should handle a basic input", ()=>{
    expect(sumNumbers(5)).toBe(15)
})
test("Should return error message for  decimal inputs", ()=>{
    expect(sumNumbers(2.5)).toBe("Input must be a natural number!")
})
test("Should return error message for 0 input", ()=>{
    expect(sumNumbers(0)).toBe("Input must be a natural number!")
})
test("Should return error message for negative numbers", ()=>{
    expect(sumNumbers(-2)).toBe("Input must be a natural number!")
})
test("Should show error message in case input is not a number", ()=>{
    expect(sumNumbers("abc")).toBe("Input must be a natural number!"),
     expect(sumNumbers(undefined)).toBe("Input must be a natural number!"),
     expect(sumNumbers(null)).toBe("Input must be a natural number!")
})

