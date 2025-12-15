// Author :Shukria Sultani
// Date: 12/25/2025
// Problem: Kadane’s Algorithm (Max Subarray Sum)
// Example:
// [-2,1,-3,4,-1,2,1,-5,4] → 6

export const maxSubarray = (array)=>{
    if(!Array.isArray(array)){
        return "Input must be an array."
    }
    let currentMax = array[0]
    let totalMax = currentMax
    for(let i =1; i < array.length; i++){
        currentMax = (array[i]> currentMax + array[i]) ? array[i] : currentMax + array[i]
        if(currentMax > totalMax){
            totalMax = currentMax
        }
    }
   return totalMax
}
console.log(maxSubarray([2,1,4,5,2]))
console.log(maxSubarray([-2,1,-3,4,-1,2,1,-5,4]))