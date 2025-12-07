// Author : Shukria Sultani
// Date: 12/6/2025
// Problem: Write tests for the function that merge two sorted arrays into one sorted array.

import { mergeArrays } from "./question-2.js";

test("Should handle a basic input", ()=>{
    expect(mergeArrays([1,4,5], [3,6,7])).toEqual([1,3,4,5,6,7])
})
test("Should handle non-array inputs", ()=>{
    expect(mergeArrays("abc")).toBe("Input must be an array.")
    expect(mergeArrays(null)).toBe("Input must be an array.")
    expect(mergeArrays(undefined)).toBe("Input must be an array.")
})