// Author: Shukria Sultani
// Date: 11/23/2025
// Problem: Find LCM of two numbers

export const findLCM = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Inputs must be numbers.";
  }
  if (num1 <=0 || num2 <= 0) {
    return "Inputs must be positive numbers, greater than 0";
  }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "Inputs must be whole numbers.";
  }
  let a = num1;
  let b = num2;
  while (num2 !== 0) {
    let remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  let gcd = num1;
  let lcm = (a * b) / gcd;
  return lcm;
};

