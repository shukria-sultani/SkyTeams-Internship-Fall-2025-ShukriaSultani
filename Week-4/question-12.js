// Author: Shukria Sultani
// Date: 12/12/2025
// Problem: Character Frequency Counter
// Description: Count occurrences of characters.
// Input: "banana" → {b:1, a:3, n:2}


export const charFrequency = (str) => {
   if(typeof str !== "string"){
      return "Input must be a string."
   }
  let charObject = {};

  for (let i = 0; i < str.length; i++) {
    const character = str[i];
    if (character in charObject) {
      charObject[character]++;
    } else {
      charObject[character] = 1;
    }
  }

  return charObject;
};
console.log(charFrequency("banana"));
