// Author: Shukria Sultani
//Date: 11/25/2025
// Problem:  Write a function to find the largest element in an array

export const getLargeElement = (numbers)=>{
      if (!Array.isArray(numbers)) {
      return "Input must be an array."; 
    }
    if (numbers.length === 0) {
    return "Cannot find largest element in an empty array."; 
    }
    let largest = numbers[0]
    for(let i =0 ; i < numbers.length; i++){
        if(numbers [i] > largest){
            largest = numbers[i]
        }
    }
    return largest
}
console.log(getLargeElement([4,3,1]))

