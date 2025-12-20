// Author: Shukria Sultani
// Date: 12/20/2025
//Problem: Write tests for the function that returns the logest Palindromic substring.

import { longestPalindromicSubstring } from "./question-21.js";

test("Should handle basic inputs", ()=>{
    // odd length palindrome
    expect(longestPalindromicSubstring("babad")).toBe("bab")

    // even length palindrome
    expect(longestPalindromicSubstring("cbbd")).toBe("bb")
})
test("Should handle non-string inputs", ()=>{
    expect(longestPalindromicSubstring(123)).toBe("Input must be a string.")
    expect(longestPalindromicSubstring(null)).toBe("Input must be a string.")
    expect(longestPalindromicSubstring(undefined)).toBe("Input must be a string.")
})