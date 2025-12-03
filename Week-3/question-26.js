// Author: Shukria Sultani
// Date: 12/3/2025
// Problem: Convert Decimal to Binary
// Description: Convert a decimal number to its binary representation.
// Example:
// Input:
// 10
// Output:
// 1010

export const convertToBinary = (number)=>{
    if(typeof number !== "number"){
        return "Input must be a number"
    }
    let binary =[]

     while (number !== 0){
        let remainder = number % 2
             binary.push(remainder)
        number = Math.floor(number / 2)
     }
 let joinedElements = binary.join("")
return joinedElements
}

