//Author : Shukria Sultani
///Date : 12/7/2025
// Problem: 6. Binary Search Algorithm
// Description: Implement binary search in a sorted array.
// Example:
// Input: [1, 3, 5, 7, 9], Target = 7
// Output: Found at index 3

export const binarySearchElement = (arr, target) => {
    if(!Array.isArray(arr)){
        return "Input must be an array"
    }
  let index;
  let lowPoint = 0;
  let highPoint = arr.length - 1;
  while (lowPoint <= highPoint) {
    let midElement = Math.floor((lowPoint + highPoint) / 2);
    if (target === arr[midElement]) {
      index = midElement;
      return index;
    } else if (target < arr[midElement]) {
      highPoint = midElement - 1;
    } else if (target > arr[midElement]) {
      lowPoint = midElement + 1;
    }
    
  }
  if(typeof index === "undefined"){
    return "Element does not exist"
  }
};
console.log(binarySearchElement([1, 2, 4, 5, 7], 10));
console.log(binarySearchElement([1, 2, 4, 5, 6, 7, 8, 9, 10], 5));
