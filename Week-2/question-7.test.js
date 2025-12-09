// Author: Shukria Sultani
// Date: 11/18/2025
// Problem: Write tests for the function that determines if a number is odd or even

import { isOddOrEven } from "./question-7.js";

test("Should return odd for a simple input", ()=>{
    expect(isOddOrEven(5)).toBe("Odd")
})
test("Should return even for a simple input", ()=>{
    expect(isOddOrEven(4)).toBe("Even")
})
test("Should handle zero", ()=>{
    expect(isOddOrEven(0)).toBe("0 is neither odd nor even")
})
test("Should handle negative numbers", ()=>{
    expect(isOddOrEven(-6)).toBe("Even")
})
test("Should handle decimal inputs", ()=>{
    expect(isOddOrEven(5.56)).toBe("Input must be an integer")
})
test("Should handle inputs that are not number", ()=>{
    expect(isOddOrEven("abc")).toBe("Input should be a number"),
    expect(isOddOrEven(true)).toBe("Input should be a number")
})