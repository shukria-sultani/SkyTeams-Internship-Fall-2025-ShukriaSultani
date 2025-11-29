// Author: Shukria Sultani
// Date: 11/29/2025
// Problem:  Check for Armstrong number

export const isArmstrong = (number) => {
    if(typeof number !== "number"){
        return "Input must be a number."
    }
    if(number <= 0 ){
        return "Input must be a non-zero, positive number."
    }
    let numberValue = number
  let digits = [];
  while (number !== 0) {
    let remainder = number % 10;
    digits.push(remainder);
    number = Math.floor(number / 10);
  }
  let poweredDigits = [];
  let powered = 1;

  digits.forEach((digit) => {
    for (let i = 0; i < digits.length; i++) {
      powered *= digit;
    }
    poweredDigits.push(powered);
    powered = 1;
  });

   let sumOfPowered = 0
   for(let i = 0; i < poweredDigits.length;i++){
      sumOfPowered+= poweredDigits[i]
   }
   if(sumOfPowered === numberValue){
    return true
   }
   else{
    return false
   }
};


