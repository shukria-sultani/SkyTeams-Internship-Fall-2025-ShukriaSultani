// Author: Shukria Sultani
// Date: 11/29/2025
// Problem: Write tests for the function that checks if a number is Armstrong.

import { isArmstrong } from "./question-15.js";

test("Should handle a basic input", ()=>{
    expect(isArmstrong(153)).toBe(true)
    expect(isArmstrong(122)).toBe(false)
})
test("Should handle 0 and negative numbers with error message", ()=>{
     expect(isArmstrong(0)).toBe("Input must be a non-zero, positive number.")
     expect(isArmstrong(-153)).toBe("Input must be a non-zero, positive number.")
})
test("Should handle non-numeric inputs with an error message", ()=>{
    expect(isArmstrong("abc")).toBe("Input must be a number.")
    expect(isArmstrong(null)).toBe("Input must be a number.")
    expect(isArmstrong(undefined)).toBe("Input must be a number.")
})