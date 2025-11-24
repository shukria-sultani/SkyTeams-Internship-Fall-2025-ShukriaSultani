// Author : Shukria Sultani
// Date: 11/24/2025
// Problem : Reverse a number

export const reverseNumber = (num)=>{
    if(typeof num !== "number"){
        return "Input must be a number."
    }
    let numArray = []
      while(num !== 0){
        let  remainder = num % 10
         numArray.push(remainder)
         num = Math.floor(num / 10)
        
      }
    let reversedArray = numArray.join("")
    return Number(reversedArray)
}
