// Author: Shukria Sultani
// Date: 12/7/2025
// Problem: Write tests for the function that finds the shared elements in two arrays.

import { findSharedElements } from "./question-4.js";
test("Should handle basic input", ()=>{
    expect(findSharedElements([1,2,3],[1,4,5,3])).toEqual([ 1, 3 ])
    expect(findSharedElements([1,2,3,5,4],[1,2,5])).toEqual([1, 2, 5])
})
test("Should handle non-array inputs with error message",()=>{
    expect(findSharedElements("abc",[1,2,3])).toBe("Inputs must be arrays.")
    expect(findSharedElements("abc", null)).toBe("Inputs must be arrays.")
    expect(findSharedElements(undefined, null)).toBe("Inputs must be arrays.")
})