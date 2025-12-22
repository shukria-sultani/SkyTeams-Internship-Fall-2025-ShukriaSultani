// Author: Shukria Sultani
// Date: 12/22/2025
// Problem: Write tests for the function that checks if a sentence follows a pattern.

import { checkPatternMatching } from "./question-13.js";

test("Should handle a basic input", ()=>{
    expect(checkPatternMatching("dog cat cat dog", "abba")).toBe(true)
    expect(checkPatternMatching("dog cat cat cat", "abba")).toBe(false)
})
test("Should return false if the length of sentence and pattern are not equla", ()=>{
    expect(checkPatternMatching("dog dog", "abb")).toBe(false)
})
test("Should handle non-string inputs", ()=>{
    expect(checkPatternMatching(123, "abb")).toBe("Inputs must be string.")
    expect(checkPatternMatching("dog dog cat", 123)).toBe("Inputs must be string.")
})