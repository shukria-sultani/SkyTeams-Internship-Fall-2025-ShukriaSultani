// Author : Shukria Sultani
// Date: 12/4/2025
// Problem: Write tests for the function that remove duplicate elements  from an array

import { removeDuplicates } from "./question-28.js";

test("Should handle basic input", ()=>{
    expect(removeDuplicates([2,4,5,6,4,4,5])).toEqual([2,4,5,6])
    expect(removeDuplicates(["d","c","b","a","b","v","b"])).toEqual(["a", "b", "c", "d", "v"])
})
test("Should handle non-array inputs", ()=>{
    expect(removeDuplicates("abc")).toBe("Input must be an array.")
    expect(removeDuplicates(null)).toBe("Input must be an array.")
    expect(removeDuplicates(undefined)).toBe("Input must be an array.")
})