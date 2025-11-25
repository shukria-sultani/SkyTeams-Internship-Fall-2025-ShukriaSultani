// Author: Shukria Sultani
// Date: 11/25/2025
// Problem: Write tests for the function that finds the largest element in an array

import { getLargeElement } from "./question-5.js";


test("Should return the largest element from a basic positive integer array", ()=>{
    expect(getLargeElement([2, 3, 1, 5, 10, 4])).toBe(10);
});

test("Should return the largest element from an array of negative numbers", ()=>{
    expect(getLargeElement([-5, -1, -10, -2])).toBe(-1);
});

test("Should return the single element when array length is one", ()=>{
    expect(getLargeElement([99])).toBe(99);
});

test("Should return the correct number when duplicates exist", ()=>{
    expect(getLargeElement([5, 5, 1, 3, 5])).toBe(5);
});

test("Should handle an empty array with an error message", ()=>{
    expect(getLargeElement([])).toBe("Cannot find largest element in an empty array.");
});

test("Should handle non-array inputs with an error message", ()=>{
    expect(getLargeElement("abc")).toBe("Input must be an array.");
    expect(getLargeElement(123)).toBe("Input must be an array.");
    expect(getLargeElement(null)).toBe("Input must be an array.");
    expect(getLargeElement(undefined)).toBe("Input must be an array.");
});
