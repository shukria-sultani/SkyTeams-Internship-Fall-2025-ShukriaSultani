// Author: Shukria Sultani
// Date: 12/20/2025
// Problem: Write tests for the function that finds the number that would appear in the k-th position if the array were sorted in descending order

import { findKthLargestElement } from "./question-24.js";

test("Should handle basic input", ()=>{
    expect(findKthLargestElement([1,3,4,6,2], 2)).toBe(3)
})
test("Should handle non-array inputs",()=>{
    expect(findKthLargestElement(1234, 3)).toBe("Input must be an array.")
    expect(findKthLargestElement(null, 3)).toBe("Input must be an array.")
    expect(findKthLargestElement(undefined, 3)).toBe("Input must be an array.")
})
test("Should hanlde non-numeric inputs for K value", ()=>{
    expect(findKthLargestElement([1,2,2,2,3,3], "abc")).toBe("The K value should be a number.")
    expect(findKthLargestElement([1,2,2,2,3,3], null)).toBe("The K value should be a number.")
    expect(findKthLargestElement([1,2,2,2,3,3], undefined)).toBe("The K value should be a number.")
})