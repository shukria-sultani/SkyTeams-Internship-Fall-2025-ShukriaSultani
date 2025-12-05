// Author: Shukria Sultani
// Date: 12/3/2025
// Problem: 29. Check if Two Arrays Are Equal
// Description: Compare two arrays and determine if they contain the same elements in the same
// order.
// Example:
// Input:
// [1, 2, 3], [1, 2, 3]
// Output:
// Equal

export const areEqualArrays = (arr1, arr2) => {
  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    return "Inputs must be arrays."
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
   for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false
    }
    
   }
      return true

};

console.log(areEqualArrays([2, 3, 1], [2, 2, 1]));
console.log(areEqualArrays([2, 2, 1], [2, 3, 2, 1]));
console.log(areEqualArrays([2, 2, 3], [2, 2, 1]));
console.log(areEqualArrays([2, 2, 1], [2, 2, 1]));
