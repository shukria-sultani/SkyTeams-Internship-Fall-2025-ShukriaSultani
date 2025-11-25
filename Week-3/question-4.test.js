// Author :Shukria Sultani
// Date: 11/25/2025
// Problem: Write tests for the function that finds the factors of the number

import {findFactors} from "./question-4.js"

test("Should handle a basic input", ()=>{
    expect(findFactors(12)).toEqual([1, 2, 3, 4, 6, 12]);
});

test("Should handle non-numeric inputs gracefully", ()=>{
    expect(findFactors('abc')).toBe("Input must be a number.");
    expect(findFactors('12')).toBe("Input must be a number.");
    expect(findFactors(null)).toBe("Input must be a number.");
    expect(findFactors(undefined)).toBe("Input must be a number.");
});

test("Should handle large numbers correctly", ()=>{
    expect(findFactors(850)).toEqual([1, 2, 5, 10, 17,25, 34, 50, 85, 170, 425, 850]);
});

test("Should handle prime numbers (only 2 factors)", ()=>{
    expect(findFactors(13)).toEqual([1, 13]);
    expect(findFactors(29)).toEqual([1, 29]);
});

test("Should handle perfect squares correctly", ()=>{
    expect(findFactors(36)).toEqual([1, 2, 3, 4, 6, 9, 12, 18, 36]);
});

test("Should handle input of 0 and 1", ()=>{
    expect(findFactors(0)).toEqual([]); 
    expect(findFactors(1)).toEqual([1]);
});
