// Author :Shukria Sultani
// Date: 11/30/2025
// Problem: Write tests for the function that calculates BMI


import { calculateBMI } from "./question-20.js";

test("Should handle a basic input", ()=>{
    expect(calculateBMI(50, 1.75)).toBe("BMI= 16.327 (Underweight)")
    expect(calculateBMI(90, 1.50)).toBe("BMI= 40.000 (Obese)")
    expect(calculateBMI(70, 1.60)).toBe("BMI= 27.344 (Overweight)")
    expect(calculateBMI(70, 1.75)).toBe("BMI= 22.857 (Normal weight)")
})
test("Should handle non-numeric inputs with error message", ()=>{
    expect(calculateBMI(80, "abc")).toBe("Inputs must be numbers.")
    expect(calculateBMI(null, 100)).toBe("Inputs must be numbers.")
    expect(calculateBMI(null, undefined)).toBe("Inputs must be numbers.")
})
test("Should handle 0 and negative inputs", ()=>{
    expect(calculateBMI(0, -1.50)).toBe("Inputs must be non-zero, positive numbers.")
    expect(calculateBMI(-80, -0)).toBe("Inputs must be non-zero, positive numbers.")
})