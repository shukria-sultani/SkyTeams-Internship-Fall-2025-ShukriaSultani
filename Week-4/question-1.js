// Author : Shukria Sultani
// Date: 12/6/2025
// Problem: Find Second Largest Number in an Array
// Description: Find the second largest number without sorting the array.
// Example:
// Input: [10, 20, 4, 45, 99]
// Output: 45

export const findSecondLargest = (numArr) => {
    if(!Array.isArray(numArr)){
        return "Input must be an array."
    }
    let numbers = [...numArr]
  let largest = 0;
  let secondLargest = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  let index = numbers.indexOf(largest)
  numbers.splice(index, 1)
    for(let i =0; i < numbers.length; i++){
    if(numbers[i] > secondLargest){
        secondLargest = numbers[i]
    }
  }
  return secondLargest
};
console.log(findSecondLargest([2, 3, 4, 6]));
console.log(findSecondLargest([2, 50, 10, 6]));
