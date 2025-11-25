// Author: Shukria Sultani
// Date: 11/25/2025
// Problem: Write tests for the function that finds the sum of all elements in an array

import { sumArray } from "./question-7.js"; 

test("Should calculate the sum of a basic array of positive integers", () => {
    expect(sumArray([1,2,3])).toBe(6); 
});

test("Should calculate the sum of an array containing zero", () => {
    expect(sumArray([1,0,0,2])).toBe(3); 
});

test("Should calculate the sum of an array with negative numbers", () => {
    expect(sumArray([-1, 5, -3, 10])).toBe(11); 
});

test("Should handle decimal array elements", () => {
    expect(sumArray([1.5, 2.25, 0.25])).toBe(4);
});

test("Should handle large array", ()=>{
    expect(sumArray([2,50,6,9,10,30,4,0,5,5,6,7,8,9,10])).toBe(161)
})
test("Should handle an empty array", () => {
    expect(sumArray([])).toBe(0);
});

test("Should handle non-array inputs by returning the specified error message", () => {
    expect(sumArray("not an array")).toBe("Input must be an array.");
    expect(sumArray(12345)).toBe("Input must be an array.");
    expect(sumArray(null)).toBe("Input must be an array.");
    expect(sumArray(undefined)).toBe("Input must be an array.");
});


