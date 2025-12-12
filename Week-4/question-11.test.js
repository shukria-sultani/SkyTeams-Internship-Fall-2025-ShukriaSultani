// Author :Shukria Sultani
// Date: 12/13/2025
//Problem: Write tests for the function that checks if a string is the rotation of another.

import { isStringRotation } from "./question-11.js";

test("Should handle basic input", ()=>{
    expect(isStringRotation("waterbottle", "erbottlewat")).toBe(true)
    expect(isStringRotation("waterbottle", "erbottlew")).toBe(false)
})
test("Should handle non-string inputs", ()=>{
    expect(isStringRotation(123, "123")).toBe("Inputs must be string.")
    expect(isStringRotation(123, null)).toBe("Inputs must be string.")
    expect(isStringRotation(undefined, null)).toBe("Inputs must be string.")
})