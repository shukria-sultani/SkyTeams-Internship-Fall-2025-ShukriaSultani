// Author: Shukria Sultani
// Date: 12/19/2025
// Problem: 21. Longest Palindromic Substring
// Input: "babad" → "bab" or "aba"

export const longestPalindromicSubstring = (str) => {
  if(typeof str !== "string"){
    return "Input must be a string."
  }
  let longestPalindrome = "";
  let palindromeLength = 0;

  for (let i = 0; i < str.length; i++) {
    // Odd length palindrome
    let left = i;
    let right = i;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > palindromeLength) {
        palindromeLength = right - left + 1;
        longestPalindrome = str.slice(left, right + 1);
      }
      left -= 1;
      right += 1;
    }

    // Even length palindrome
    left = i;
    right = i + 1;
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > palindromeLength) {
        palindromeLength = right - left + 1;
        longestPalindrome = str.slice(left, right + 1);
      }
      left -= 1;
      right += 1;
    }
  }

  return longestPalindrome;
};

