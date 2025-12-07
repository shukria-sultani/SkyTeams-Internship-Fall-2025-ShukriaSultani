// Author :Shukria Sultani
// Date  : 12/7/2025
// Problem:  Rotate Array K Times to the Right
// Description: Rotate elements of an array K times to the right.
// Example:
// Input: [1, 2, 3, 4, 5], K = 2
// Output: [4, 5, 1, 2, 3]

export const rotateArrayToRight = (arr, k)=>{
    if(!Array.isArray(arr)){
        return "Input must be an array."
    }
    if(typeof k !== "number"){
        return "The rotation point must be a number."
    }
   let arrayLength = arr.length
   let rotation = k % arrayLength
   let cutPoint = arrayLength - rotation
    let startPoint = []
    let endPoint = []

    for(let i = cutPoint; i < arrayLength ; i++){
        startPoint.push(arr[i])
    }
        for(let i = 0; i < cutPoint ; i++){
        endPoint.push(arr[i])
    }
    let rotatedArray = [...startPoint, ...endPoint]
    return rotatedArray
}
console.log(rotateArrayToRight([1,2,3,4,5,6], 3))
console.log(rotateArrayToRight([1,2,3,4,5,6], 4))