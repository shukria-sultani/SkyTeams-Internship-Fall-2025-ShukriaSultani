// Author: Shukria Sultani
// Date: 11/25/2025
// Problem: Display all factors of a number

export const findFactors = (num) => {
    if(typeof num !== "number"){
        return "Input must be a number."
    }
  const factors = new Set();
  let squareRoot = Math.floor(Math.sqrt(num));
  for (let i = 1; i <= squareRoot; i++) {
    if (num % i === 0) {
      factors.add(i);
      let pairedFactor = num / i;
      factors.add(pairedFactor);
    }
  }
  let factorsArray = Array.from(factors);
  let sortedArray = factorsArray.sort((a, b) => a - b);
  return sortedArray;
};
console.log(findFactors(12));
console.log(findFactors(20));
console.log(findFactors(36));
