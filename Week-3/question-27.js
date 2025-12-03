// Author: Shukria Sultani
// Date: 12/3/2025
// Problem:
// Find Unique Elements in an Array
// Description: Return an array with only unique elements from the input array.
// Example:
// Input:
// [1, 2, 2, 3, 4, 4, 5]
// Output:
// [1, 2, 3, 4, 5]
// 28. Remove Duplicates from an Ar

export const uniqueArr = (arr) => {
    if(!Array.isArray(arr)){
        return "Input must be an array."
    }
  let uniqueSet = new Set();

  for (let i = 0; i < arr.length; i++) {
    uniqueSet.add(arr[i]);
  }
  let uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
};
