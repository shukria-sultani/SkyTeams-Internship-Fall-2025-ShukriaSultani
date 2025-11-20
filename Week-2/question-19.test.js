// Author: Shukria Sultani
// Date: 11/20/2025
// Problem: Write tests for the function that reverse a number.

import { reverseNumber } from "./question-19.js";

test("Should handle a basic input",()=>{
    expect(reverseNumber(9345)).toBe("5439")
})
test("Should return error message for non-numeric inputs",()=>{
    expect(reverseNumber("9345")).toBe("Input must be a number.")
    expect(reverseNumber("abc")).toBe("Input must be a number.")
    expect(reverseNumber(null)).toBe("Input must be a number.")
    expect(reverseNumber(undefined)).toBe("Input must be a number.")
})
test("Should handle decimal inputs", ()=>{
    expect(reverseNumber(234.456)).toBe("654.432")
})
test("Should handle negative numbers", ()=>{
    expect(reverseNumber(-345)).toBe("543-")
})