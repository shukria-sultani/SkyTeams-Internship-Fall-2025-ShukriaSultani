// Author: Shukria Sultani
// Date: 11/27/2025
// Problem: Find factorial of a number

export const findFactorial = (n)=>{
    if(typeof n !== "number"){
        return "Input must be a number."
    }
    if(n <= 0){
        return "Input must be a positive number greater than 0."
    }
    let factorial = 1
    for(let i = 1; i < n ; i++){
        factorial *= i + 1
         
    }
    return factorial
}
