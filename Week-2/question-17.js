//Author: Shukria Sultani
// Date: 11/19/2025
//Problem: Sum of first N natural numbers


// To sum first N natural numbers I can use recursion also, recursion works like loop. For setting up recursion first I need the base case, the base case determines at what point the function should stop, in this case when num is equal to 1 it should stop further executing the function and return 1. Second, I need to add the logic to sum the numbers. In this case, the function return num + function call num -1 which go down until the base case and the numbers will be added.


// Without a loop, the recursion came to my mind. But when I searched on Google for any math formula to do this I found another solution

// Why this math formula works better for this problem?
// The math formula works better because loops and recursion can take longer to find the answer as they have to iterate through all the number until  the condition is fulfilled. About the recursion, if the number is large it can take more amount of space in the memory.
// This math formula is simple and fast. It takes the same time for all the numbers, large or small to find the answer.


export const sumNumbers = (num)=>{
    if(typeof num !== "number" || !Number.isInteger(num) || num < 1){
        return "Input must be a natural number!"
    }
 
    // let sumTotal = 0
    // for(let i = 1; i <= num; i++){
    //     sumTotal += i
    // }
    // return sumTotal

    // if(num === 1){
    //     return 1
    // }
    // return num + sumNumbers(num - 1)
    let sum = num * (num + 1) /2
    return sum
}

console.log(sumNumbers(5))