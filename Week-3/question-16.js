// Author: Shukria Sultani
//  Date: 11/29/2025
// Problem: Print the Fibonacci sequence up to N terms.

export const createFibonacci = (n)=>{
       let fibonacci = []

    if(typeof n !== "number"){
        return "Input must be a number."
    }
    if(n <= 0){
        return "Input must be non zero, positive number."
    }
    if(n === 1){
        return [0]
    }
   let a = 0
   let b = 1
   fibonacci.push(a)
   fibonacci.push(b)
   for(let i = 2; i < n ; i++){
      let newTerm =  a + b
      fibonacci.push(newTerm)
      a = b
      b = newTerm
   }
    return fibonacci
}
