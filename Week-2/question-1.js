// Author: Shukria Sultani
// Date: 11/17/2025
//Problem: Swap two variables without using a temporary variable

// Solution: In order to swap the values of two variables we can use destructuring.
// Destructuring is a powerful feature in js that we can extract the values of an object and array and save to new variables.I this case, I can put the variables a and b in an array and destructure them to a new array by swapping their places that will change their values.
export const swapVariables = (a, b)=>{
   return  [a,b] = [b, a]
}
