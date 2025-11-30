// Author : Shukria Sultani
// Date: 11/30/2025
// Problem: Password Strength Checker
// Description: A strong password must:
// • Be at least 8 characters long.
// • Contain at least one uppercase letter, one lowercase letter, and one number.
// Example:
// Input:
// MyPass123
// Output:
// Strong
// Input:
// pass
// Output:
// Weak

export const passwordChecker = (password)=>{
    if(typeof password !== "string"){
        return "Input must be a string."
    }
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
  'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let upperCase =  [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]  
  let containsUpperCase = false;
  let containsLowerCase = false
  let containsNumber = false

   for(let i in numbers){
    for(let j in password){
        if (password[j] === numbers[i]){
            containsNumber = true
        }
    }
   }
   
   for(let i in lowerCase){
    for(let j in password){
        if (password[j] === lowerCase[i]){
            containsLowerCase = true
        }
    }
   }
   
   for(let i in upperCase){
    for(let j in password){
        if (password[j] === upperCase[i]){
            containsUpperCase = true
        }
    }
   }

  if(password.length >= 8 && containsLowerCase && containsUpperCase && containsNumber){
    return "Strong"
  }
  else{
    return "Weak"
  }
}
console.log(passwordChecker("pass"))
console.log(passwordChecker("passWord123"))
console.log(passwordChecker("passworD1234"))
console.log(passwordChecker('passwordshhh'))
