// Author: Shukria Sultani
//Date: 11/27/2025
// Problem: Power of a number (without built-in function)
export const findPower= (a, b)=>{
    if(typeof a !== "number" || typeof b !== "number"){
        return "Inputs must be numbers."
    }
    let power = 1;
    for(let i = 0; i < b; i++ ){
        power  *= a
    }
    return power
}

