//Author: Shukria Sultani
// Date: 11/21/2025
// Problem: Count digits in a number

export const countDigits = (digit)=>{
    if(typeof digit !== "number"){
        return "Input must be a number."
    }
 let count = 0
 let number = Math.abs(digit)
 if(number === 0){
    return 1
 }
 while(number >= 1){
    number = Math.floor(number / 10)
    count++
 }
 return count
}
