// Author : Shukria Sultani
// Date: 12/9/2025
//Problem: Write tests for the function that compresses string

import { compressString } from "./question-9.js";

test("Should handle a basic input", ()=>{
    expect(compressString("aaaabddc")).toBe("a4b1d2c1")
})
test("Should handle non-string inputs",()=>{
    expect(compressString(null)).toBe("Input must be a string.")
    expect(compressString(undefined)).toBe("Input must be a string.")
    expect(compressString(123)).toBe("Input must be a string.")
})