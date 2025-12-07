// Author: Shukria Sultani
// Date: 12/7/2025
// Problem: Rearrange Array (Even Before Odd)
// Description: Move even numbers before odd numbers while maintaining order.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6, 1, 3, 5]

export const arrangeEvenBeforeOdd = (arr)=>{
    if(!Array.isArray(arr)){
        return "Input must be an array."
    }
    let evenNums = []
    let oddNums = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenNums.push(arr[i])
        }
        else{
            oddNums.push(arr[i])
        }
    }
    let arrangedArray = [...evenNums, ...oddNums]
   return arrangedArray
}
console.log(arrangeEvenBeforeOdd([1, 2, 3, 4, 5, 6]))