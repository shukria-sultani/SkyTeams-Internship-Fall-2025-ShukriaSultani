// Author: Shukria Sultani 
// Date: 11/27/2025
// Problem: Write tests for the function that finds the power of a given numbers to a specific point.

import { findPower } from "./question-13.js";

test("Should handle a basic input", ()=>{
    expect(findPower(2,4)).toBe(16)
})
test("Should handle non-numeric inputs with an error message", ()=>{
    expect(findPower(2, "ab")).toBe("Inputs must be numbers.")
})
test("Should handle 0", ()=>{
    expect(findPower(0, 2)).toBe(0)
})
test("Should handle 1", ()=>{
    expect(findPower(1, 10)).toBe(1)
})
test("Should handle 0 power", ()=>{
    expect(findPower(10,0)).toBe(1)
})
test("Should handle large inputs", ()=>{
    expect(findPower(5, 12)).toBe(244140625)
})