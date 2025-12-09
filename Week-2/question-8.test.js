// Author: Shukria Sultani
// Date: 11/18/2025
//Problem : Write tests for the function that checks if a number is positive, negative or 0

import { checkNumberType } from "./question-8.js";
test("Should return 'Positive' for a positive number", () => {
    expect(checkNumberType(8)).toBe("Positive");
});

test("Should return 'Negative' for a negative number", () => {
    expect(checkNumberType(-8)).toBe("Negative");
});

test("Should return '0' for an input of zero", () => {
    expect(checkNumberType(0)).toBe("0");
});

test("Should handle non-number input", () => {
    expect(checkNumberType("abc")).toBe("Input should be a number");
});
test("Should handle decimal inputs",()=>{
    expect(checkNumberType(23.5)).toBe("Positive")
})

