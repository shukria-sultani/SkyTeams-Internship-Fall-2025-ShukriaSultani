// AUthor: Shukria Sultani
// Date: 11/18/2025
// Problem:  Determine if a number is positive, negative, or zero

//Solution: I can use if-else statements to check if the number is greater than 0 return positive, and if it is smaller than zero return negative.

export const checkNumberType = (num)=>{
    if(typeof(num) !== "number"){
        return "Input should be a number"
    }
    if(num > 0){
        return "Positive"
    } 
    else if(num < 0){
         return "Negative"
    }
    else{
        return "0"
    }
}
