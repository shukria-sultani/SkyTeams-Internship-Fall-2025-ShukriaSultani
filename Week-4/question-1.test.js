// Author : Shukria Sultani
// Date: 12/6/2025
// Problem : Write tests for the function that finds the second largest element in an array


import { findSecondLargest } from "./question-1.js";

test("Should handle a basic input", ()=>{
    expect(findSecondLargest([2,50,3,10])).toBe(10)
})
test("Should handle non-array inputs", ()=>{
    expect(findSecondLargest("abc")).toBe("Input must be an array.")
    expect(findSecondLargest(null)).toBe("Input must be an array.")
    expect(findSecondLargest(undefined)).toBe("Input must be an array.")
})