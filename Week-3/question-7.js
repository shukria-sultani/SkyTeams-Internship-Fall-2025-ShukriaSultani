// Author: Shukria Sultani
// Date: 11/25/2025
// Problem:  Write a function to find the sum of all elements in an array

export const sumArray = (arr)=>{
 if (!Array.isArray(arr)) {
      return "Input must be an array."; 
    }
    let total = Math.floor(0)

   for(let i = 0; i< arr.length; i++){
     total  += arr[i]
   }
   return total

}
