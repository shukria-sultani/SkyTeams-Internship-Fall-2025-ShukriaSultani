// Author : Shukria Sultani
// Date: 11/27/2025
// Problem: Write tests for the function that find the factorial of a number

import { findFactorial } from "./question-14.js"

test("Should handle a basic input", ()=>{
    expect(findFactorial(5)).toBe(120)
})
test("Should handle 0 and negative numbers with error message", ()=>{
    expect(findFactorial(0)).toBe("Input must be a positive number greater than 0.")
    expect(findFactorial(-4)).toBe("Input must be a positive number greater than 0.")
})
test("Should handle non-numeric inputs", ()=>{
    expect(findFactorial("ab")).toBe("Input must be a number.")
    expect(findFactorial(null)).toBe("Input must be a number.")
    expect(findFactorial(undefined)).toBe("Input must be a number.")
})
test("Should handle 1", ()=>{
    expect(findFactorial(1)).toBe(1)
})
test("Should handle large input", ()=>{
    expect(findFactorial(10)).toBe(3628800)
})
