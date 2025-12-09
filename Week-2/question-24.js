// Author: Shukia Sultani
// Date: 11/23/2025
// Problem: Find the GCD of twp numbers.
export const findGCD = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Inputs must be number.";
  }
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "Inputs must be whole numbers.";
  }
  if (num1 <= 0 || num2 <= 0) {
    return "Inputs must be positive numbers, greater than 0";
  }

  while (num2 !== 0) {
    let remainder = num1 % num2;
    num1 = num2;
    num2 = remainder;
  }
  return num1;
};
