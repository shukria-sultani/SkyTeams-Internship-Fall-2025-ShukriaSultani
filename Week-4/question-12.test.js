// Author: Shukria Sultani
// Date: 12/12/2025
// Problem: Write tests for the function that count the occurrences of characters in a string.

import { charFrequency } from "./question-12.js";

test("Should handle basic input", ()=>{
    expect(charFrequency("banana")).toEqual({ b: 1, a: 3, n: 2 })
})
test("Should handle non string inputs", ()=>{
    expect(charFrequency(null)).toBe("Input must be a string.")
    expect(charFrequency(123)).toBe("Input must be a string.")
    expect(charFrequency(undefined)).toBe("Input must be a string.")
})