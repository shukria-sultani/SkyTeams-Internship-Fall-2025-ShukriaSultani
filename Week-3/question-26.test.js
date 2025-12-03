// Author : Shukria Sultani
// Date: 12/3/2025
// Problem: Write tests for the function that convert a number to decimal 

import { convertToBinary } from "./question-26.js";

test("Should handle basic input", ()=>{
    expect(convertToBinary(10)).toBe("0101")
})
test("Should handle non-numeric inputs", ()=>{
    expect(convertToBinary("abc")).toBe("Input must be a number")
    expect(convertToBinary(null)).toBe("Input must be a number")
    expect(convertToBinary(undefined)).toBe("Input must be a number")
})