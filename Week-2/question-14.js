// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Check character type

export const checkCharType = (char)=>{
const consonants = [
  "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
  "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"
];
const vowels = [
  "a", "e", "i", "o", "u"
];
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")",
  "-", "_", "+", "=", "{", "}", "[", "]", "|", "\\",
  ":", ";", "\"", "'", "<", ">", ",", ".", "?", "/"
];
const CharAsString = String(char)
 if(char === null || char === ""){
    return "Input cannot be empty value"
 }
 if(consonants.includes(CharAsString.toLowerCase())){
    return "Consonant"
 }
 else if(vowels.includes(CharAsString.toLowerCase())){
    return "Vowel"
 }
 else if(digits.includes(CharAsString)){
    return "Digit"
 }
 else if(symbols.includes(CharAsString)){
    return "Symbol"
 }
 else{
    return "Does not support character"
 }

}
