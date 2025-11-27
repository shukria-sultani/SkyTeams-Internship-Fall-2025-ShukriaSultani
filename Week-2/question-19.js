// Author: Shukria Sultani
// Date: 11/20/2025
// Problem: Reverse a number
export const reverseNumber = (num)=>{
    if(typeof num !== "number"){
        return "Input must be a number."
    }
    let numAsString = String(num);
    let numbers= []
    for(let i = numAsString.length -1 ; i >= 0; i--){
        numbers.push(numAsString[i])
    }
    let sign = "";
    if(numbers.includes("-")){
        sign = numbers[numbers.length-1]
        numbers.pop();     
    }
    let joinedElements = numbers.join("")
    let addSign = sign+joinedElements
     
    return Number(addSign)
}
