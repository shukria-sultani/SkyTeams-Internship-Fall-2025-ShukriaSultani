// Author : Shukria Sultani
// Date: 12/3/2025
// Problem: 28. Remove Duplicates from an Array
// Description: Remove duplicate elements efficiently from an array.
// Example:
// Input:
// [3, 1, 3, 5, 1]
// Output:
// [3, 1, 5]

export const removeDuplicates = (arr) => {
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }
  let uniqueElements = []

 let sortedArray =arr.sort()
  for(let i = 0; i < sortedArray.length; i++){
     if(sortedArray[i] !== sortedArray[i+ 1]){
       uniqueElements.push(sortedArray[i])
     }
  }
  return uniqueElements
};
console.log(removeDuplicates(["d","c","b","a","b","v","b"]))
console.log(removeDuplicates([2,3,4,5,4,4,3]))