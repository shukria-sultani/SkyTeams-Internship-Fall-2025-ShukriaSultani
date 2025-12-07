// Author : Shukria Sultani
// Date: 12/8/2025
// problem : Write tests for the function that performs binary search

import { binarySearchElement } from "./question-6.js";

test("Should handle a basic input", ()=>{
    expect(binarySearchElement([1,2,3,4,5,6,7], 5)).toBe(4)
    expect(binarySearchElement(["a","b","c","d","e","f","g"], "b")).toBe(1)
})
test("Should return a message if the element does not exist",()=>{
    expect(binarySearchElement([1,3,5,6], 10)).toBe("Element does not exist")
})