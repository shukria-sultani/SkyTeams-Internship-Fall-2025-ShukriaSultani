// Author : Shukria Sultani
// Date: 12/2/2025
// Problem: Generate Pascal’s Triangle
// Description: Implement pascalTriangle(rows), which prints Pascal’s Triangle up to n rows.
// Example:
// Input:
// 5
// Output:
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

export const pascalTriangle = (n)=>{
   let triangle = []
    for(let i = 1; i <= n ; i++){
        let currentRow = [1]
    if(i > 1){
       let prevRow = triangle[triangle.length - 1]
        for(let j = 1; j < prevRow.length; j++){
            let sum = prevRow[j-1] + prevRow[j]
            currentRow.push(sum) 
        }
         currentRow.push(1)
        }
        triangle.push(currentRow)
    }

for(let row of triangle){
    let joined= row.join(" ")
    console.log(joined)
}
}

pascalTriangle(5)