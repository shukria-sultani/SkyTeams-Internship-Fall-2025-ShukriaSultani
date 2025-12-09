// Author: Shukria Sultani
// Date: 11/18/2025
// Problem: Check whether a number is even or odd

// Solution: to determine if a number is odd or even I can check if it is divisible by 2, if it is the program returns odd otherwise it returns even. I also checks if the input is 0, decimal and not a number. 

export const isOddOrEven= (num)=>{
    if(typeof (num) !== "number"){
        return "Input should be a number"
    }
    if(!Number.isInteger(num)){
        return "Input must be an integer"
    }
    if(num === 0){
        return "0 is neither odd nor even"
    }
    if(num % 2 === 0){
        return "Even"
    }
    else if(num % 2 !== 0){
        return "Odd"
    }
}
