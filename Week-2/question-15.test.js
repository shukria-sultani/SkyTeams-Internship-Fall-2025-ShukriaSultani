// Author : Shukria Sultani
// Date: 11/20/2025
// Problem: Write tests for the function that checks triangle validity and type.

import { isTriangle } from "./question-15.js";

test("Should return 'Valid triangle, Equilateral' for equal sides", () => {
    expect(isTriangle(5, 5, 5)).toBe("Valid triangle, Equilateral");
});

test("Should return 'Valid triangle, Isosceles' for two equal sides", () => {
    expect(isTriangle(2, 5, 5)).toBe("Valid triangle, Isosceles");
    expect(isTriangle(5, 2, 5)).toBe("Valid triangle, Isosceles");
    expect(isTriangle(5, 5, 2)).toBe("Valid triangle, Isosceles");
});

test("Should return 'Valid triangle, Scalene' for all different sides that form a valid triangle", () => {
    expect(isTriangle(3, 4, 5)).toBe("Valid triangle, Scalene");
});

test("Should return 'Not a valid triangle' if the sum of two sides are not greater than the third one", () => {
    expect(isTriangle(6, 2, 3)).toBe("Not a valid triangle"); 
    expect(isTriangle(1, 1, 4)).toBe("Not a valid triangle"); 
    expect(isTriangle(10, 1, 1)).toBe("Not a valid triangle");
});


test("Should return error message for non-numeric inputs", () => {
    expect(isTriangle(5, "abv", "3")).toBe("Inputs must be numbers");
    expect(isTriangle(null, " ", "3")).toBe("Inputs must be numbers");
    expect(isTriangle(5, undefined, 3)).toBe("Inputs must be numbers");
});

test("Should return 'Not a valid triangle' for zero or negative side lengths", () => {
    expect(isTriangle(0, 5, 5)).toBe("Not a valid triangle");
    expect(isTriangle(-1, 5, 5)).toBe("Not a valid triangle");
    expect(isTriangle(3, 0, 4)).toBe("Not a valid triangle");
});
