// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Write tests for the function that checks character type.

import { checkCharType } from "./question-14.js"; 


test("Should correctly identify lowercase vowel 'a'", () => {
    expect(checkCharType("a")).toBe("Vowel");
});

test("Should correctly identify uppercase vowel 'E'", () => {
    expect(checkCharType("E")).toBe("Vowel");
});

test("Should correctly identify lowercase consonant 'z'", () => {
    expect(checkCharType("z")).toBe("Consonant");
});

test("Should correctly identify uppercase consonant 'B'", () => {
    expect(checkCharType("B")).toBe("Consonant");
});

test("Should correctly identify string digit '5'", () => {
    expect(checkCharType("5")).toBe("Digit");
});

test("Should correctly identify a symbol '#'", () => {
    expect(checkCharType("#")).toBe("Symbol");
});

test("Should correctly identify a symbol '@'", () => {
    expect(checkCharType("@")).toBe("Symbol");
});

test("Should handle numeric input correctly", () => {
    expect(checkCharType(0)).toBe("Digit"); 
    expect(checkCharType(9)).toBe("Digit")
});

test("Should return error for empty string input", () => {
    expect(checkCharType("")).toBe("Input cannot be empty value");
});

test("Should return error for null input", () => {
    expect(checkCharType(null)).toBe("Input cannot be empty value");
});

test("Should return error for undefined input", () => {
    expect(checkCharType(undefined)).toBe("Does not support character");
});

test("Should return 'Does not support character' for strings longer than one char (word)", () => {
    expect(checkCharType("hello")).toBe("Does not support character");
});

test("Should return 'Does not support character' for strings longer than one char (number)", () => {
    expect(checkCharType("12")).toBe("Does not support character"); 
});

test("Should return 'Does not support character' for inputs not in the lists (whitespace)", () => {
    expect(checkCharType(" ")).toBe("Does not support character");
});

test("Should return 'Does not support character' for inputs not in the lists", () => {
    expect(checkCharType("ф")).toBe("Does not support character");
});
