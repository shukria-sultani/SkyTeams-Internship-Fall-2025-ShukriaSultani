// Author: Shukria Sultani
//Date: 11/23/2025
// Problem: Write tests for the function that finds LCM of two numbers

import { findLCM } from "./question-25.js";

test("Should handle basic input", ()=>{
    expect(findLCM(120,10)).toBe(120)
})
test("Should handle non-numeric inputs with error message", ()=>{
    let errorMessage = "Inputs must be numbers."
    expect(findLCM("abc", 12)).toBe(errorMessage)
    expect(findLCM(12, "12")).toBe(errorMessage)
    expect(findLCM(null, 12)).toBe(errorMessage)
    expect(findLCM(12, undefined)).toBe(errorMessage)
})
test("Should handle zero with error message", ()=>{
    expect(findLCM(12, 0)).toBe("Inputs must be positive numbers, greater than 0")
    expect(findLCM(0, 12)).toBe("Inputs must be positive numbers, greater than 0")
})
test("Should handle negative numbers with error message", ()=>{
    expect(findLCM(-10, 5)).toBe("Inputs must be positive numbers, greater than 0")
    expect(findLCM(-10, -5)).toBe("Inputs must be positive numbers, greater than 0")
})
test("Should return an error for inputs that are not integers", () => {
    expect(findLCM(120.5, 20)).toBe("Inputs must be whole numbers.");
    expect(findLCM(15, 7.2)).toBe("Inputs must be whole numbers.");
});
test("Should handle moderately large numbers", () => {
    expect(findLCM(270, 192)).toBe(8640); 
});
test("Should handle prime numbers", ()=>{
    expect(findLCM(77, 11)).toBe(77)
})