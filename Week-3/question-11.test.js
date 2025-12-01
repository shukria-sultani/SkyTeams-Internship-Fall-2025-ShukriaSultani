// Author: Shukria Sultani
// Date: 12/1/2025
// Problem: Write tests for the function that generates prime numbers up to N

import { generatePrimeNum } from "./question-11.js";

test("Should handle a basic input", ()=>{
    expect(generatePrimeNum(10)).toEqual([2,3,5,7])
})
test("Should handle 1 and negative numbers with error message", ()=>{
    expect(generatePrimeNum(1)).toBe("Input must be greater than 1.")
    expect(generatePrimeNum(-10)).toBe("Input must be greater than 1.")
})
test("Should handle decimal inputs with error message", ()=>{
      expect(generatePrimeNum(2.5)).toBe("Only natural numbers can be prime or comprised.")
})
test("Should handle non-numeric inputs with error message", ()=>{
   expect(generatePrimeNum("abc")).toBe("Input must be a number.")
   expect(generatePrimeNum(null)).toBe("Input must be a number.")
   expect(generatePrimeNum(undefined)).toBe("Input must be a number.")
})