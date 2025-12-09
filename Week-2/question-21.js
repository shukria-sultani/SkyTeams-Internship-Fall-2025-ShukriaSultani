// Author : Shukria Sultani
// Date: 11/21/2025
// Problem : Sum of digits

export const sumDigits = (digit) => {
    if(typeof digit  !== "number"){
        return "Input must be a number."
    }
  let sum = 0;
  let number = Math.abs(digit)
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
};


