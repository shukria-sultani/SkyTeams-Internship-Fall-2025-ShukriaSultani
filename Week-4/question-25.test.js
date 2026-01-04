// Author : Shukria Sultani
// Problem: Write tests for the function that sets the matrix zeroes
// Date: 1/4/2025

import { setMatrixZeroes } from "./question-25.js";

test("Should handle basic input", () => {
    expect(setMatrixZeroes([[1, 2, 3], [2, 4, 0]])).toEqual([[1, 2, 0], [0, 0, 0]])
})
test("Should handle non-array inputs", () => {
    expect((setMatrixZeroes("1,2,3"))).toBe("Input must be an array")
    expect((setMatrixZeroes(null))).toBe("Input must be an array")
    expect((setMatrixZeroes(undefined))).toBe("Input must be an array")
})