// Author: Shukria Sultani
// Date: 11/20/2025
// Problem: Reverse a number

export const reverseNumber = (num)=>{
    if(typeof num !== "number"){
        return "Input must be a number."
    }
    let strConverted = String(num)
    let reversed = []
   for(let i = strConverted.length -1 ; i >= 0; i--){
      reversed.push(strConverted[i])
   }
   return reversed.join("")
}
console.log(reverseNumber(934))