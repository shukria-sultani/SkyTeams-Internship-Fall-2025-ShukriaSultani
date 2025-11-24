// Author: Shukria Sultani
// Date: 11/24/2025
// Problem: Write tests for a function that counts vowels in a string.
import { countVowels } from "./question-1.js";
test("Should handle an empty string.", () => {
    expect(countVowels("")).toBe(0);
});
test("Should handle strings with no vowels (only consonants).", () => {
    expect(countVowels("rhythm")).toBe(0);
    expect(countVowels("sky")).toBe(0);
});
test("Should handle strings containing non-alphabetic characters (numbers, spaces, symbols).", () => {
    expect(countVowels("Testing 123!@#")).toBe(2); 
});

test("Should count all vowels correctly.", () => {
    expect(countVowels("yesterday")).toBe(3); 
});
test("Should handle non-string inputs with error message", ()=>{
    expect(countVowels(123)).toBe("Input must be a string.")
    expect(countVowels(null)).toBe("Input must be a string.")
    expect(countVowels(undefined)).toBe("Input must be a string.")
})


