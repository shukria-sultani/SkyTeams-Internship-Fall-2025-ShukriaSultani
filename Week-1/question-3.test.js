//Author: Shukria Sultani
//Date: 11/16/2025
//Problem: Write tests for a function that finds the largest number in an array
import { findLargestNum } from "./question-3.js";

test("Should return 'Array is empty' if the array length is equal to 0'", ()=>{
    expect(findLargestNum([])).toBe("Array is empty")
})
test("Should return the element itself in a single element array", ()=>{
    expect(findLargestNum([100])).toBe(100)
})
test("Should find the largest number in a basic input", ()=>{
    expect(findLargestNum([100, 40, 5000, 5])).toBe(5000)
})
test("Should return the largest positive number in the array the contains both positive and negative numbers", ()=>{
    expect(findLargestNum([-100, -900, 5, 10, -1200])).toEqual(10)
})
test("Should return the smallest negative number", ()=>{
    expect(findLargestNum([-200, -100, -400, -5])).toEqual(-5)
})
test("Should correctly handle an array with duplicate largest numbers", ()=>{
    expect(findLargestNum([10, 50, 20, 50, 5])).toBe(50);
});
test("Should return the largest number when zero is included", ()=>{
    expect(findLargestNum([0, 10, -5, 2])).toBe(10);
});

test("Should return zero if it is the largest number in the array", ()=>{
    expect(findLargestNum([-10, -5, 0])).toBe(0);
});
test("Should find the largest number in an array with decimal values", ()=>{
    expect(findLargestNum([1.5, 2.75, 1.2, 0.99])).toBe(2.75);
});

