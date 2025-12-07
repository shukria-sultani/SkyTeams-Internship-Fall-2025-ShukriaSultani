// Author: Shukria Sultani
// Date: 12/6/2025
// Problem: . Merge Two Sorted Arrays
// Description: Merge two sorted arrays into a single sorted array.
// Example:
// Input: [1, 3, 5], [2, 4, 6]
// Output: [1, 2, 3, 4, 5, 6]

export const mergeArrays = (arr1, arr2) => {
        if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Input must be an array."
    }
  let mergedArray = [...arr1, ...arr2];
  let sortedArray = [];
  while (mergedArray.length > 0) {
    let smallIndex = 0;
    for (let i = 0; i < mergedArray.length; i++) {
      if (mergedArray[i] < mergedArray[smallIndex]) {
        smallIndex = i;
      }
    }
    let smallNum = mergedArray[smallIndex];
    sortedArray.push(smallNum);
    mergedArray.splice(smallIndex, 1);
  }
  return sortedArray;
};
mergeArrays([1, 3, 4], [7, 5, 6]);
