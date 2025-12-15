// Author :  Shukria Sultani
// Date: 12/15/2025
// Problem: Write tests for the function that generates all the permutations of a string

import { generatePermutations } from "./question-14.js";

test("Should handle a basic input", ()=>{
    expect(generatePermutations("abc")).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba' ])
})
test("Should handle non-string inputs", ()=>{
    expect(generatePermutations(123)).toBe("Input must be a string.")
    expect(generatePermutations(null)).toBe("Input must be a string.")
    expect(generatePermutations(undefined)).toBe("Input must be a string.")
})