// Author: Shukria Sultani
// Date: 12/7/2025
// Problem: Intersection of Two Arrays
// Description: Return elements present in both arrays.
// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]

export const findSharedElements = (arr1, arr2)=>{
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Inputs must be arrays."
    }
    let sharedElements = []
    for(let i in arr1){
        for(let j in arr2){
            if(arr1[i] === arr2[j]){
                sharedElements.push(arr1[i])
            }
        }
    }
    return sharedElements
}
findSharedElements([1,2,3],[1,4,5,3])
findSharedElements([1,2,3,5,4],[1,2,5])