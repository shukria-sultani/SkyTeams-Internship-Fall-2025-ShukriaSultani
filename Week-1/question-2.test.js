// Author: Shukria Sultani
// Date: 11/16/2025
// Problem: Write tests for the function that reverse a string

import { reverseString } from "./question-2.js";

test("Should reverse an empty string", ()=>{
    expect(reverseString("")).toBe("")
})
test("Should reverse a single character", ()=>{
    expect(reverseString("s")).toBe("s")
})
test("Should reverse the string with leading and trailing spaces", ()=>{
    expect(reverseString(" I am Shukria ")). toBe(" airkuhS ma I ")
})
test("Should return the reversed string for a basic input", ()=>{
    expect(reverseString("Hello")).toBe("olleH")
})
test("Should reverse a string that contains punctuation marks", ()=>{
    expect(reverseString("Hello !")).toBe("! olleH")
})
test("Should reverse a string that contains numbers", ()=>{
    expect(reverseString("Hello 123")).toBe("321 olleH")
})