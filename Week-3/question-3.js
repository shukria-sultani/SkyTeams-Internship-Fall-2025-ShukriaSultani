// Author: Shukria Sultani
// Date: 11/25/2025
// Problem:Sum of digits of a number

export const sumDigits = (num)=>{
    if(typeof num !== "number"){
        return "Input must be a number."
    }
    let total = 0
    let absoluteValue = Math.abs(num)
    while(absoluteValue !== 0){
        let remainder = absoluteValue % 10
        total += remainder
        absoluteValue = Math.floor(absoluteValue / 10)
    }
    return total
}
console.log(sumDigits(123))
console.log(sumDigits(-123))