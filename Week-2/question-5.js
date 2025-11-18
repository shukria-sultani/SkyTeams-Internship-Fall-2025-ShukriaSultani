// Author: Shukria Sultani
// Date:11/18/2025
// Problem: Compute Simple and Compound Interest


// Solution: I can use this formula to calculate the simple interest (Simple Interest = (P × R × T) / 100). 
// To calculate the compound interest I can use this formula (Compound Interest = P × ((1 + R/100) ^ T - 1)) 
// The formatNumber function is there to handle the floating-point precision and correctly display the numbers
const formatNumber = (num)=>{
    let formattedNumber  = parseFloat(num.toFixed(2))
    return formattedNumber.toString()
}
export const calculateInterest = (p, r,t)=>{
    const simpleInterest = (p * r * t) /100
    const compoundInterest = p * (Math.pow(1 + r / 100, t) - 1)
    const formattedSI = formatNumber(simpleInterest)
    const formattedCI = formatNumber(compoundInterest)
    return `Simple Interest: ${formattedSI}, Compound Interest: ${formattedCI}`
}

console.log(calculateInterest(1000, 5,2))

