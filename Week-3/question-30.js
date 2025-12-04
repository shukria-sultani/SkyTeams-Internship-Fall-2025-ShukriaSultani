// Author: Shukria Sultani
// Date: 12/4/2025
// Problem: 30. Find Missing Number in Array (1 to N)
// Description: Given numbers from 1 to N with one missing, find the missing number.
// Example:
// Input:
// [1, 2, 4, 5]
// Output:
// 3


export const findMissingNum = (numArr)=>{
    if(!Array.isArray(numArr)){
        return "Input must be an array."
    }
    let length = numArr.length
    let missing = 0;
    for(let i = 1; i <= length; i++){
        if(!numArr.includes(i)){
           missing +=i 
        }
    }
    return missing
      
}  
console.log(findMissingNum([1,2,4,5]))
console.log(findMissingNum([1,3,2,4,5,6,8]))