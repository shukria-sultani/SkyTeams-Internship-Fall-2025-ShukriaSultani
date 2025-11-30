// Author: Shukria Sultani
// Date :11/30/2025
// Problem: Write tests for the function the checks if a password is strong

import { passwordChecker } from "./question-21.js";

test( "Should handle a basic input", ()=>{
    expect(passwordChecker("shukria")).toBe("Weak")
    expect(passwordChecker("Shukriaa")).toBe("Weak")
    expect(passwordChecker("Shukria123")).toBe("Strong")
})
test("Should handle non-string inputs", ()=>{
    expect(passwordChecker(1234)).toBe("Input must be a string.")
    expect(passwordChecker(null)).toBe("Input must be a string.")
    expect(passwordChecker(undefined)).toBe("Input must be a string.")
})