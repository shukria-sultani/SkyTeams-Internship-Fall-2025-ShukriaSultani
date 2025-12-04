// Author: Shukria Sultani
// Date: 12/4/2025
// Problem: Write tests for the function that finds the missing number

import { findMissingNum } from "./question-30.js";

test("Should handle basic input", ()=>{
    expect(findMissingNum([1,2,4,5])).toBe(3)
    expect(findMissingNum([1,2,3,4,5,7,8])).toBe(6)
})
test("Should handle non-array inputs", ()=>{
    expect(findMissingNum("abc")).toBe("Input must be an array.")
    expect(findMissingNum(null)).toBe("Input must be an array.")
    expect(findMissingNum(undefined)).toBe("Input must be an array.")
})