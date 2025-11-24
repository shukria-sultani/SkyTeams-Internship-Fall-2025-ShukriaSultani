// Author: Shukria Sultani
// Date: 11/24/2025
// Problem: Write tests for the function that reverses a number
import { reverseNumber } from "./question-2.js";

    test("Should reverse a standard positive integer.", () => {
        expect(reverseNumber(123)).toBe(321);
    });

    test("Should handle numbers ending in zero (leading zeros in reverse).", () => {
        expect(reverseNumber(120)).toBe(21);
        expect(reverseNumber(500)).toBe(5);
    });
    
    test("Should handle single-digit numbers.", () => {
        expect(reverseNumber(5)).toBe(5);
        expect(reverseNumber(0)).toBe(0);
    });

    test("Should handle very large numbers.", () => {
        expect(reverseNumber(1234567890123)).toBe(3210987654321); 
    });

    test("Should handle non-numeric inputs with error message.", () => {
        expect(reverseNumber("hello")).toBe("Input must be a number.");
        expect(reverseNumber(null)).toBe("Input must be a number.");
        expect(reverseNumber(undefined)).toBe("Input must be a number.");
    });

