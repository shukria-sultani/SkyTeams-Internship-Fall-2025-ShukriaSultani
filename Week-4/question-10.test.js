// Author: Shukria Sultani
// Date: 12/8/2025
// Problem: Write tests for the function that checks if a string only contains unique characters

import { isUnique } from "./question-10.js";

test("Should handle basic input", ()=>{
    expect(isUnique("Zahra")).toBe(false)
    expect(isUnique("Shukria")).toBe(true)
})
test("Should handle non-string inputs", ()=>{
    expect(isUnique(null)).toBe("Input must be a string.")
    expect(isUnique(123)).toBe("Input must be a string.")
    expect(isUnique(undefined)).toBe("Input must be a string.")
})