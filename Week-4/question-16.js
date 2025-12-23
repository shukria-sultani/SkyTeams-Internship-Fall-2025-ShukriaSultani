//Author : Shukria Sultani
// Date: 12/23/2025
// Problem: 16. Matrix Multiplication
// Description: Multiply matrix A × B manually.
// Example:
// [[1,2],[3,4]] × [[5,6],[7,8]] → [[19,22],[43,50]

export const matrixMultiplication = (matrix1, matrix2) => {
    if(!Array.isArray(matrix1) || !Array.isArray(matrix2)){
        return "Inputs must be arrays"
    }
    let matrixLength = matrix1.length
    let colsMatrix1 = matrix1[0].length;
    let rowsMatrix2 = matrix2.length;

    if (colsMatrix1 !== rowsMatrix2) {
        return "The length of the first matrix row should be equal to column in the second matrix"
    }
    let newArray = []
    for (let i = 0; i < matrixLength; i++) {
        let arr = []
        for (let j = 0; j < matrix2[0].length; j++) {
            arr.push(0)
        }
        newArray.push(arr)
    }

    for (let i = 0; i < matrixLength; i++) {
        for (let j = 0; j < matrix2[0].length; j++) {
            for (let k = 0; k < colsMatrix1; k++) {
                newArray[i][j] += matrix1[i][k] * matrix2[k][j]
            }
        }
    }
    return newArray
}
console.log(matrixMultiplication([[1, 2], [3, 4, 5]], [[5, 6, 5], [7, 8, 5], [2,4,5]]))