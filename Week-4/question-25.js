// Author : Shukria Sultani
// Date: 1/4/2025
// //25. Set Matrix Zeroes
// If an element is zero, set its entire row and column to zero.
// Follow-up: solve in constant extra space using the matrix itself as markers.

export const setMatrixZeroes = (matrix) => {
    if (!Array.isArray(matrix)) {
        return "Input must be an array"
    }
    let isFirstRowZero = false
    let isFirstColZero = false

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === 0) {
            isFirstColZero = true
            break
        }
    }
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] === 0) {
            isFirstRowZero = true
            break
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[i].length; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0
            }
        }
    }
    if (isFirstColZero) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][0] = 0
        }
    }
    if (isFirstRowZero) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[0][j] = 0
        }
    }
    return matrix
}
console.log(setMatrixZeroes([[1, 3, 4], [1, 2, 0]]))