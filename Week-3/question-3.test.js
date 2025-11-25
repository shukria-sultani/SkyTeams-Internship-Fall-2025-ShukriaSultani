// Author : Shukria Sultani
// Date: 11/25/2025
// Problem: Write tests for the function that returns the sum of digits of a number.

import { sumDigits } from "./question-3.js";

test("Should handle a basic input", ()=>{
    expect(sumDigits(123)).toBe(6)
})
test("Should handle non-numeric inputs with error message.", ()=>{
    expect(sumDigits("hello")).toBe("Input must be a number.")
    expect(sumDigits("123")).toBe("Input must be a number.")
    expect(sumDigits(null)).toBe("Input must be a number.")
    expect(sumDigits(undefined)).toBe("Input must be a number.")
})
test("Should handle 0", ()=>{
    expect(sumDigits(0)).toBe(0)
})
test("Should handle numbers with zero correctly", ()=>{
    expect(sumDigits(1000)).toBe(1)
    expect(sumDigits(1200)).toBe(3)
})
test("Should handle negative numbers", ()=>{
    expect(sumDigits(-234)).toBe(9)
})
test("Should handle large input", ()=>{
    expect(sumDigits(12323486937432)).toBe(57)

})