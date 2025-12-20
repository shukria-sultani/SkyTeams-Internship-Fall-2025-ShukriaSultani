// Author :Shukria Sultani
// Date: 12/20/2025
// Problem: 24. K-th Largest Element 
// Given an array of numbers and a value k, find the number that would appear in the k-th 
// position if the array were sorted in descending order.

export const findKthLargestElement = (array, k)=>{
   let sortedArray =[]
  while(array.length > 0){
    let largeIndex = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[largeIndex]) {
        largeIndex = i;
      }
    }
    let largeNum = array[largeIndex];
    sortedArray.push(largeNum);
    array.splice(largeIndex, 1);
}
  let kthElement = sortedArray[k]
  console.log(kthElement)
}
findKthLargestElement([1,3,4,6,2], 2)