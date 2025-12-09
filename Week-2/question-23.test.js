  // Author: Shukria Sultani
  // Date: 11/24/2025
  // Problem: Write tests for the function that create fibonacci series up to N terms
  import {createFibonacci} from "./question-23.js"

    test('Should return the first 10 fibonacci numbers', () => {
        expect(createFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });

    test('Should return [0] when n is 1', () => {
        expect(createFibonacci(1)).toEqual([0]);
    });

    test('Should return [0, 1] when n is 2', () => {
        expect(createFibonacci(2)).toEqual([0, 1]);
    });

    test('Should return an empty array when n is 0 or negative', () => {
        expect(createFibonacci(0)).toEqual([]);
        expect(createFibonacci(-5)).toEqual([]);
    });

    test('Should return an error message for non-numeric input', () => {
        expect(createFibonacci("hello")).toBe("Input must be a number.");
        expect(createFibonacci(null)).toBe("Input must be a number.");
        expect(createFibonacci(undefined)).toBe("Input must be a number.");
    });

    test('Should return correct sequence for 5 terms', () => {
        expect(createFibonacci(5)).toEqual([0, 1, 1, 2, 3]);
    });
    test("Should handle decimal inputs with error message", ()=>{
         expect(createFibonacci(5.5)).toBe("Input must be a whole number.")
    })
