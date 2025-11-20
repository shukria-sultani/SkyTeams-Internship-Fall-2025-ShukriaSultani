// Author: Shukria Sultani
//Date: 11/20/2025
//Problem: Write tests for the function that return from 1 to 100 sequentially.

import { printNumbers } from "./question-16.js";

describe('printNumbers', () => {

    test('Should return an array containing 100 elements', () => {
        const result = printNumbers();
        expect(result).toHaveLength(100);
    });

    test('Should return an array where the first element is 1', () => {
        const result = printNumbers();
        expect(result[0]).toBe(1);
    });

    test('Should return an array where the last element is 100', () => {
        const result = printNumbers();
        const lastIndex = result.length - 1;
        expect(result[lastIndex]).toBe(100);
    });
    
    test('Should return an array of numbers sequentially from 1 to 100', () => {
        const result = printNumbers();
        const expectedArray = Array.from({ length: 100 }, (_, i) => i + 1);
        expect(result).toEqual(expectedArray);
    });
});
