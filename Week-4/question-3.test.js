// Author: Shukria Sultani
// Date: 12/7/2025
// problem: Write tests for the function that rotates an array to the right k times

import { rotateArrayToRight } from "./question-3.js";

test("Should handle a basic input", ()=>{
    expect(rotateArrayToRight([1,2,3,4,5,6], 3)).toEqual([4, 5, 6, 1, 2, 3])
    expect(rotateArrayToRight([1,2,3,4,5,6], 4)).toEqual([3, 4, 5, 6, 1, 2])
})
test("Should handle non-array inputs with error message", ()=>{
    expect(rotateArrayToRight("ac", 3)).toBe("Input must be an array.")
    expect(rotateArrayToRight(null, 3)).toBe("Input must be an array.")
    expect(rotateArrayToRight(undefined, 3)).toBe("Input must be an array.")
})
test("Should handle non-numeric inputs for k with error message", ()=>{
    expect(rotateArrayToRight([1,2,3,5], "abc")).toBe("The rotation point must be a number.")
    expect(rotateArrayToRight([1,2,3,4], null)).toBe("The rotation point must be a number.")
    expect(rotateArrayToRight([1,3,4,5,6], undefined)).toBe("The rotation point must be a number.")
})