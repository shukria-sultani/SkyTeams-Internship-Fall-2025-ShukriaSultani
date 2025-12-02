// Author :Shukria Sultani
// Date: 12/2/2025
// Problem: Write tests for the function tht finds the factorial
import { findFactorial } from "./question-23.js"
test("Should handle a basic input", ()=>{
    expect(findFactorial(5)).toBe(120)
})
test("Should return 1 for 0 input", ()=>{
    expect(findFactorial(0)).toBe(1)
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