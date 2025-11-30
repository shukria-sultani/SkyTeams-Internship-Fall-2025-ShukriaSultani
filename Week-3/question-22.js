// Author : Shukria Sultani
// Date: 11/30/2025
// Problem: . Collatz Sequence (Hailstone Numbers)
// Description:
// Take a number n.
// • If n is even, divide it by 2.
// • If n is odd, multiply it by 3 and add 1.
// • Repeat until n = 1.
// • Count the number of steps to reach 1.
// Example:
// Input:
// 6
// Output:
// 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 (Steps: 8)
export const hailstoneNumbers = (number)=>{
    if(typeof number !== "number"){
        return "Input must be a number."
    }
    if(number <= 0){
        return "Input must be a non-zero, positive number."
    }
    let stepsArray = []
    stepsArray.push(number)
    let currentNumber = 0
    while( number !== 1){
        if(number % 2 === 0){
            currentNumber = number / 2 
            stepsArray.push(currentNumber)
            number = currentNumber
        }
        else{
            currentNumber = (number * 3) + 1 
            stepsArray.push(currentNumber)
            number = currentNumber
        }

    }
    return stepsArray
}
console.log(hailstoneNumbers(0))