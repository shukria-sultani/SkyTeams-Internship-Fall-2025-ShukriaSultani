// Author : Shukria Sultani
// Date: 11/20/2025
//Problem: Write tests for the function that creates multiplication table for a number

import {createMultiplicationTbl} from "./question-18.js"

test("Should handle a basic input", ()=>{
    expect(createMultiplicationTbl(4)).toEqual([
    "4 x 1 = 4",
    "4 x 2 = 8",
    "4 x 3 = 12",
    "4 x 4 = 16",
    "4 x 5 = 20",
    "4 x 6 = 24",
    "4 x 7 = 28",
    "4 x 8 = 32",
    "4 x 9 = 36",
    "4 x 10 = 40",])
})
test("Should handle the limit argument correctly, if passed", ()=>{
    expect(createMultiplicationTbl(5,4)).toEqual([
    "5 x 1 = 5",
    "5 x 2 = 10",
    "5 x 3 = 15",
    "5 x 4 = 20",
    ])
})
test("Should return error message if the input is zero or a negative number", ()=>{
    expect(createMultiplicationTbl(0)).toBe("Inputs cannot be zero or negative number."),
    expect(createMultiplicationTbl(-2)).toBe("Inputs cannot be zero or negative number.")
})
test("Should return error message if the limit is passed as zero or negative number", ()=>{
    expect(createMultiplicationTbl(2, 0)).toBe("Inputs cannot be zero or negative number."),
    expect(createMultiplicationTbl(2, -2)).toBe("Inputs cannot be zero or negative number.")
})

test("Should return error message for non-numeric inputs", ()=>{
    expect(createMultiplicationTbl("abc")).toBe("Inputs must be number."),
    expect(createMultiplicationTbl(2, "abv")).toBe("Inputs must be number."),
    expect(createMultiplicationTbl(null)).toBe("Inputs must be number."),
    expect(createMultiplicationTbl(3, null)).toBe("Inputs must be number.")
})
test("Should return error message for decimal inputs", ()=>{
    expect(createMultiplicationTbl(2.5)).toBe("Inputs must be whole number."),
    expect(createMultiplicationTbl(2, 4.5)).toBe("Inputs must be whole number.")

})