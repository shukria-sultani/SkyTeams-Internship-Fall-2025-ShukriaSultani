// Author : Shukria Sultani
// Date: 12/15/2025
// Problem: String Pattern Matching ("abba")
// Description: Check if sentence follows the pattern.
// Example: "dog cat cat dog" → True

export const checkPatternMatching = (sentence, pattern) => {
  if(typeof sentence !== "string" || typeof pattern !== "string"){
    return "Inputs must be string."
  }
  let splitted = sentence.split(" ");
  if (pattern.length !== splitted.length) {
    return false;
  }
  let object = {};
  for (let i = 0; i < pattern.length; i++) {
    let currentLetter = pattern[i]
    let currentWord = splitted[i]
    if (currentLetter in object) {
      if (object[currentLetter] !== currentWord) {
        return false
      }
    }
    else {
      if (!Object.values(object).includes(currentWord)) {
        object[currentLetter] = currentWord
      }
      else {
        return false
      }
    }

  }
  return true
};
console.log(checkPatternMatching("aa bbb aaa aa", "aab"));
