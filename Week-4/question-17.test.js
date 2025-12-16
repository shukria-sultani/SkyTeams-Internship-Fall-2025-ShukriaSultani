// Author : Shukria Sultani
// Date: 12/16/2025
// problem : Write tests for the function that abbreviates a sentence. 

import { abbreviateString } from "./question-17.js";

test("Should handle a basic input", ()=>{
    expect(abbreviateString("I am Shukria")).toBe("I a S")
})
test("Should handle non-string inputs", ()=>{
    expect(abbreviateString(123)).toBe("Input must be a string.")
    expect(abbreviateString(null)).toBe("Input must be a string.")
    expect(abbreviateString(undefined)).toBe("Input must be a string.")
})