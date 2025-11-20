//Author: Shukria Sultani
// Date: 11/19/2025
//Problem: Sum of first N natural numbers


export const sumNumbers = (num)=>{
    if(typeof num !== "number" || !Number.isInteger(num) || num < 1){
        return "Input must be a natural number!"
    }
 
    let sumTotal = 0
    for(let i = 1; i <= num; i++){
        sumTotal += i
    }
    return sumTotal


}
