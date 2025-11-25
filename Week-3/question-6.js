// Author: Shukria Sultani
// Date: 11/25/2025
// Problem: Write a function to find the smallest element in an array

export const getSmallestElement = (numbers)=>{
      if (!Array.isArray(numbers)) {
      return "Input must be an array."; 
    }
    if (numbers.length === 0) {
    return "Cannot find smallest element in an empty array."; 
    }
    let smallest = numbers[0]
    for(let i =0 ; i < numbers.length; i++){
        if(numbers [i] < smallest){
            smallest = numbers[i]
        }
    }
    return smallest
}
