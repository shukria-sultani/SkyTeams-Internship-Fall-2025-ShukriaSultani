// Author: Shukria Sultani
// Date: 12/15/2025
// Problem: Write tests for the function that implements Kadane's Algorithm for finding the max sub array.

import { maxSubarray } from "./question-15.js";

test("Should handle basic input", ()=>{
    expect(maxSubarray([2,1,4,5,2])).toBe(14)
    expect(maxSubarray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6)
})
test("Should handle non-array inputs", ()=>{
    expect(maxSubarray("123")).toBe("Input must be an array.")
    expect(maxSubarray(null)).toBe("Input must be an array.")
    expect(maxSubarray(undefined)).toBe("Input must be an array.")
})