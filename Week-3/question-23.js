//  Author: Shukria Sultani
// Date: 12/2/2025
// problem: Calculate Factorial Using Recursion
// Description: Implement factorial(n), which calculates the factorial of n using recursion.
// Example:
// Input:
// 5
// Output:
// 120

export const findFactorial = (n)=>{
      if(typeof n !== "number"){
        return "Input must be a number."
    }
    let factorial = 1
    if(n === 0){
        return  1
    }
     factorial = n *  findFactorial(n - 1)
     return factorial
}
console.log(findFactorial(5))