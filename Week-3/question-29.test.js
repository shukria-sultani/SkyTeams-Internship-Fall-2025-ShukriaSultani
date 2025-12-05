// Author : Shukria Sultani
// Date: 12/5/2025
// Problem: Write tests for the function that checks if two arrays are equal

import { areEqualArrays } from "./question-29.js";


test("Should handle a basic input", ()=>{
    expect(areEqualArrays([2,3,4], [2,3,4])).toBe(true)
    expect(areEqualArrays([2,5,4], [2,3,4])).toBe(false)
})
test("Should return false for arrays of having similar elements but different length", ()=>{
    expect(areEqualArrays([2,3,4],[2,3,4,5])).toBe(false)
})
test("Should handle non-array inputs",()=>{
    expect(areEqualArrays("abc")).toBe("Inputs must be arrays.")
    expect(areEqualArrays(undefined)).toBe("Inputs must be arrays.")
    expect(areEqualArrays(null)).toBe("Inputs must be arrays.")
})