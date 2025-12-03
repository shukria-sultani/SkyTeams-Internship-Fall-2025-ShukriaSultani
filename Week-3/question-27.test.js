// Author: Shukria Sultani
//Date: 12/3/2025
// Problem: Write test for the function that return unique array elements

import { uniqueArr } from "./question-27.js";


test("Should handle basic input", ()=>{
    expect(uniqueArr([2,3,4,4,5])).toEqual([2,3,4,5])
    expect(uniqueArr(["a", "B", "B", "C", "B"])).toEqual(["a","B","C"])
})
test("Should handle non-array inputs", ()=>{
    expect(uniqueArr("abc")).toBe("Input must be an array.")
    expect(uniqueArr(123)).toBe("Input must be an array.")
    expect(uniqueArr(null)).toBe("Input must be an array.")
    expect(uniqueArr(undefined)).toBe("Input must be an array.")
})