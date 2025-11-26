// Author: Shukria Sultani
// Date: 11/26/2025
// Problem: Write tests for the function that find the occurrences of an element in an array.


import { findOccurrence } from "./question-9.js";

test("Should handle a basic input", ()=>{
    expect(findOccurrence([2,4,5,6,2,3,2,3,2], 2)).toBe(4)
})
test("Should handle an empty array", ()=>{
    expect(findOccurrence([], 3)).toBe(0)
})
test("Should return error message if the input is not an array", ()=>{
    expect(findOccurrence(34, 4)).toBe("Input must contain an array.")
    expect(findOccurrence("abv", 4)).toBe("Input must contain an array.")
    expect(findOccurrence(null, 4)).toBe("Input must contain an array.")
    expect(findOccurrence(undefined, 4)).toBe("Input must contain an array.")
})
test("Should handle large array", ()=>{
    expect(findOccurrence([2,4,5,6,7,8,7,"a","b","v", 3.5, "a","s", "a", 21], "a")).toBe(3)
})
test("Should handle the empty or not defined element argument", ()=>{
    expect(findOccurrence([3,4,5])).toBe("Enter an element to find it's occurrence.")
    expect(findOccurrence([3,4,5], null)).toBe("Enter an element to find it's occurrence.")
    expect(findOccurrence([3,4,5], undefined)).toBe("Enter an element to find it's occurrence.")
})