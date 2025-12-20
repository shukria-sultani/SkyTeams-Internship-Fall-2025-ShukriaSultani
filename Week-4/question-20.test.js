// Author :Shukria Sultani
// Date: 12/202/2025
// Problem: Write tests for the function that checks if parentheses are balanced.

import { isBalancedParentheses } from "./question-20.js";

test("Should handle basic inputs", ()=>{
    expect(isBalancedParentheses("[[({})]]")).toBe("Balanced")
})
test("Should handle non-string inputs", ()=>{
    expect(isBalancedParentheses(123)).toBe("Input must be a string.")
    expect(isBalancedParentheses(null)).toBe("Input must be a string.")
    expect(isBalancedParentheses(undefined)).toBe("Input must be a string.")
})