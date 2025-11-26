// Author: Shukria Sultani
// Date: 11/26/2025
// Problem: Write tests for the function that checks if an array contains an element.

import { findElement } from "./question-8.js";

test("Should handle a basic input", ()=>{
    expect(findElement([2,3,5], 5)).toBe("Found")
})
test("Should handle an empty array", ()=>{
    expect(findElement([],"abc")).toBe("Not Found")
})
test("Should return not found if the element is not in the array", ()=>{
    expect(findElement([2,3,"ab", 2.5], "abc")).toBe("Not Found")
})
test("Should return error message if the input is not an array", ()=>{
    expect(findElement(34, 4)).toBe("Input must contain an array.")
    expect(findElement("abv", 4)).toBe("Input must contain an array.")
    expect(findElement(null, 4)).toBe("Input must contain an array.")
    expect(findElement(undefined, 4)).toBe("Input must contain an array.")
})
test("Should handle large array", ()=>{
    expect(findElement([2,4,5,6,7,8,9,"a","b","v", 3.5, "abc","s", "tt", 21],3.5)).toBe("Found")
})
test("Should handle the empty or not defined element argument", ()=>{
    expect(findElement([3,4,5])).toBe("Enter an element to search for.")
    expect(findElement([3,4,5], null)).toBe("Enter an element to search for.")
    expect(findElement([3,4,5], undefined)).toBe("Enter an element to search for.")
})