// Author : Shukria Sultani
// Date: 12/23/2025
// Problem: Write tests for the function that mutiply two matrixes

import { matrixMultiplication } from "./question-16.js";

test("Should handle a bsic input", ()=>{
    expect(matrixMultiplication([[1, 2], [3, 4, 5]], [[5, 6, 5], [7, 8, 5]])).toEqual([ [ 19, 22, 15 ], [ 43, 50, 35 ] ])
})
test("Should return error message when the length of the row of the first matrix is not equal to the number of columns in the second matrix", ()=>{
    expect(matrixMultiplication([[1, 2], [3, 4, 5]], [[5, 6, 5], [7, 8, 5], [2,4,5]])).toBe("The length of the first matrix row should be equal to column in the second matrix")
})
test("Should handle non-array inputs", ()=>{
    expect((matrixMultiplication(123, [[1,3],[2,3]]))).toBe("Inputs must be arrays")
    expect((matrixMultiplication([[1,3],[2,3]], 123 ))).toBe("Inputs must be arrays")
    expect((matrixMultiplication(undefined, null))).toBe("Inputs must be arrays")
})