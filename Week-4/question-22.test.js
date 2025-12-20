// Author : Shukria Sultani
// Date: 12/21/2025
// Problem:  Write tests for the function that finds and returns the overlapping intervals.

import { findOverlappingIntervals } from "./question-22.js";

test("Should handle basic input",()=>{
    expect(findOverlappingIntervals([[1,3],[2,6],[8,10]])).toEqual([[1,6],[8,10]])
})
test("Should handle non-array inputs", ()=>{
    expect(findOverlappingIntervals(123)).toBe("Input must be an array.")
    expect(findOverlappingIntervals(null)).toBe("Input must be an array.")
    expect(findOverlappingIntervals(undefined)).toBe("Input must be an array.")
})