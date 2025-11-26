// Author: Shukria Sultani
// Date: 11/26/2025
// Problem: Write tests for the function that checks whether a number is prime or no

import { isPrime } from "./question-10.js"; 

test("Should return true for prime numbers and false for composite numbers", ()=>{
    expect(isPrime(17)).toBe(true);
    expect(isPrime(15)).toBe(false);
    expect(isPrime(2)).toBe(true); 
    expect(isPrime(50)).toBe(false);
});

test("Should return false for 0, 1, and negative numbers", ()=>{
    expect(isPrime(0)).toBe(false);
    expect(isPrime(-2)).toBe(false);
    expect(isPrime(1)).toBe(false);
});

test("Should handle non-numeric inputs with an error message", () => {
    expect(isPrime("hello")).toBe("Input must be a number.");
    expect(isPrime(null)).toBe("Input must be a number.");
    expect(isPrime(undefined)).toBe("Input must be a number.");
});

test("Should handle large prime and composite numbers correctly", () => {
    expect(isPrime(997)).toBe(true);
    expect(isPrime(961)).toBe(false);
});

test("Should handle the decimal inputs with an error message", ()=>{
    expect(isPrime(3.5)).toBe("Only natural numbers can be prime or comprised")
})
