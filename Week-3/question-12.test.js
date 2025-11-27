// Author: Shukria Sultani
// Date: 11/27/2025
// Problem: Write tests for the function that checks if a number is palindrome.
import { isPalindrome } from "./question-12.js";

test("Should handle a basic input", ()=>{
    expect(isPalindrome(121)).toBe(true)
    expect(isPalindrome(122)).toBe(false)
})
test("Should handle non-numeric inputs with error message",()=>{
    expect(isPalindrome("abc")).toBe("Input must be a number.")
    expect(isPalindrome(null)).toBe("Input must be a number.")
    expect(isPalindrome(undefined)).toBe("Input must be a number.")
})
test("Should handle large numbers", ()=>{
    expect(isPalindrome(100000000000001)).toBe(true)
})