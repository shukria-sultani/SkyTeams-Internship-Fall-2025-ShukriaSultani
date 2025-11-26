// Author : Shukria Sultani
// Date: 11/26/2025
// Problem: Check whether a number is prime

export const isPrime = (num)=>{
    if(typeof num !== "number"){
        return "Input must be a number."
    }
    if(num <= 1){
        return false
    }
    if(!Number.isInteger(num)){
        return "Only natural numbers can be prime or comprised"
    }
    let squareRoot = Math.floor(Math.sqrt(num))
    for(let i = 2; i<= squareRoot; i++){
        if(num % i === 0){
            return false
        }     
    }
    return true
}

console.log(isPrime(17))
console.log(isPrime(15))
console.log(isPrime(20))