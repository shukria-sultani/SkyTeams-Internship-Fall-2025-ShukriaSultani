// Author = Shukria Sultani
// Date: 11/29/2025
// Problem: Write tests for the function that creates fibonacci series.
import { createFibonacci } from "./question-16.js";
test('Should handle a basic input', () => {
        expect(createFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('Should return 0 when n is 1', () => {
        expect(createFibonacci(1)).toEqual([0]);
    });

    test('Should return 0, 1 when n is 2', () => {
        expect(createFibonacci(2)).toEqual([0, 1]);
    });

    test('Should handle zero and negative numbers with error message.', () => {
        expect(createFibonacci(0)).toBe("Input must be non zero, positive number.");
        expect(createFibonacci(-5)).toBe("Input must be non zero, positive number.");
    });

    test('Should return an error message for non-numeric input', () => {
        expect(createFibonacci("hello")).toBe("Input must be a number.");
        expect(createFibonacci(null)).toBe("Input must be a number.");
        expect(createFibonacci(undefined)).toBe("Input must be a number.");
    });

