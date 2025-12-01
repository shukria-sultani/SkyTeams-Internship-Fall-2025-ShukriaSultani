// Author: Shukria Sultani
// Date: 11/27/2025
// Problem: Generate all prime numbers up to N

export const generatePrimeNum = (n) => {
  if(typeof n !== "number"){
        return "Input must be a number."
  }
  if(n <= 1){
    return "Input must be greater than 1."
  }
  if(!Number.isInteger(n)){
    return "Only natural numbers can be prime or comprised."
  }
    let primeNumbers = []
    for(let i = 2; i <= n;i++){
      let squareRoot = Math.floor(Math.sqrt(i))
      let isPrime = true
      for(let j = 2; j <= squareRoot; j++){
          if(i % j === 0){
            isPrime = false
            break
          }
      }
      if(isPrime){
        primeNumbers.push(i)
      }
    }
   return  primeNumbers
};
console.log(generatePrimeNum(10));
