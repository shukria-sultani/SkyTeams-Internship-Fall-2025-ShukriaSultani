// Author: Shukria Sultani
// Date: 11/26/2025
// Problem: Write a function to count occurrences of an element in an array

export const findOccurrence = (arr, element)=>{
    if(!Array.isArray(arr)){
        return "Input must contain an array."
    }
    if(element === undefined || element === null){
    return "Enter an element to find it's occurrence."
}

    let occurrence = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === element){
            occurrence++
        }
    }
    return occurrence
} 
findOccurrence([2,4,5,2,2,6,2], 2)
findOccurrence(["b","a", "c","f","c"], "c")