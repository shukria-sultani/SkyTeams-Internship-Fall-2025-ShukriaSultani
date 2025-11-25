// Author: Shukria Sultani
// Date: 11/25/2025
// Problem: Write tests for the function that finds the smallest element in an array

import { getSmallestElement } from "./question-6.js";


test("Should return the smallest element from a basic positive integer array", ()=>{
    expect(getSmallestElement([2, 3, 1, 5, 10, 4])).toBe(1);
});

test("Should return the smallest element from an array of negative numbers", ()=>{
    expect(getSmallestElement([-5, -1, -10, -2])).toBe(-10);
});

test("Should return the single element when array length is one", ()=>{
    expect(getSmallestElement([2])).toBe(2);
});

test("Should return the correct number when duplicates exist", ()=>{
    expect(getSmallestElement([5, 3, 10, 3, 5])).toBe(3);
});

test("Should handle an empty array with an error message", ()=>{
    expect(getSmallestElement([])).toBe("Cannot find smallest element in an empty array.");
});

test("Should handle non-array inputs with an error message", ()=>{
    expect(getSmallestElement("abc")).toBe("Input must be an array.");
    expect(getSmallestElement(123)).toBe("Input must be an array.");
    expect(getSmallestElement(null)).toBe("Input must be an array.");
    expect(getSmallestElement(undefined)).toBe("Input must be an array.");
});
