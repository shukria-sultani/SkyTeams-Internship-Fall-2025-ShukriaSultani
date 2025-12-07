// Author : Shukria Sultani
// Date: 12/7/2025
// Problem: Write tests for the function that arranges the number the even numbers before odd numbers

import { arrangeEvenBeforeOdd } from "./question-5.js";

test("Should handle basic inputs", ()=>{
   expect(arrangeEvenBeforeOdd([1, 2, 3, 4, 5, 6])).toEqual([ 2, 4, 6, 1, 3, 5 ])
   expect(arrangeEvenBeforeOdd([1,4, 3, 8, 5, 6])).toEqual([ 4, 8, 6, 1, 3, 5 ])
})
test("Should handle non-array inputs", ()=>{
    expect(arrangeEvenBeforeOdd("Abc")).toBe("Input must be an array.")
    expect(arrangeEvenBeforeOdd(null)).toBe("Input must be an array.")
    expect(arrangeEvenBeforeOdd(undefined)).toBe("Input must be an array.")
})