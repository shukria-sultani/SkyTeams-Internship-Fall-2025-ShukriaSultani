//Author: Shukria Sultani
//Date: 11/18/2025 
//Problem: Write tests for the function that calculates the Compound and Simple interests.


import { calculateInterest } from "./question-5.js";

test("Should return the simple and compound interest for a basic input", () => {
    expect(calculateInterest(1000, 5, 2)).toBe("Simple Interest: 100, Compound Interest: 102.5");
});

test("Handle decimal inputs for principal, rate, and time", () => {
    expect(calculateInterest(500.50, 3.25, 1.5)).toBe("Simple Interest: 24.4, Compound Interest: 24.6");
});

test("Handle zero principal input", () => {
    expect(calculateInterest(0, 5, 2)).toBe("Simple Interest: 0, Compound Interest: 0");
});

test("Handle zero time input", () => {
    expect(calculateInterest(1000, 5, 0)).toBe("Simple Interest: 0, Compound Interest: 0");
});

test("Handle very large numbers", () => {
    expect(calculateInterest(1000000, 10, 10)).toBe("Simple Interest: 1000000, Compound Interest: 1593742.46");
});
