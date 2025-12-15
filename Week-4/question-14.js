// Author: Shukria Sultani
// Date: 12/15/2025
// Problem: All Permutations of a String
// Description: Generate all permutations.
// Input: "abc" → abc, acb, bac, ...

export const generatePermutations = (str) => {
  if(typeof str !== "string"){
    return "Input must be a string."
  }
  let permutations = [];
  if (str.length === 1) {
    return str;
  }
  let firstChar = "";
  for (let i = 0; i < str.length; i++) {
    firstChar = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let permutation = generatePermutations(remaining);
    for (let subPermutation of permutation) {
      let newPermutation = firstChar + subPermutation;
      permutations.push(newPermutation);
    }
  }
  return permutations;
};
console.log(generatePermutations("abc"));
