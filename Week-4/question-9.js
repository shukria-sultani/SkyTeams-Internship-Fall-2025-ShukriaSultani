// Author: Shukria Sultani
// Date : 12/8/2025
// Problem: String Compression
// Description: Compress using counts of consecutive characters.
// Example:
// "aabcccccaaa" → "a2b1c5a3"
export const compressString = (str) => {
  if(typeof str !== "string"){
    return "Input must be a string."
  }
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    let count = 1;
    let j = i + 1
    while (j < str.length && str[j] === str [i]) {
      count++;
      j++
    }
    i = j - 1
    chars.push(str[i])
    chars.push(count);
  }
let compressedString = chars.join("")
return compressedString
};
console.log(compressString("aabcccccaaa"));
