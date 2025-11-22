// Author: Shukria Sultani
// Date: 11/22/2025
// Problem: Print even numbers in a range

export const getEvenNumbers = (start, end)=>{
    if(typeof start  !== "number" || typeof end !== "number"){
        return "Inputs should be numbers."
    }
    if(start > end){
        return "The start number should be smaller than or equal to the end number."
    }
     let evenNumbers = []
     
     for(let i = start; i <= end; i++){
        if(i % 2 === 0){
            evenNumbers.push(i)
        }
     }
    return evenNumbers
}
getEvenNumbers(2,20)
