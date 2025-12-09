// Author: Shukria Sultani
// Date: 11/16/2025
// Problem: Write a function that reverse a string

/* Solution: I can use a for loop to loop through the string from the very end and as long as the i is greater than or equal to 0 it decrement and store the result of each iteration to a variable called reversedString and return this variable.*/

export const reverseString = (str)=>{
   let reversedString = "";
   for(let i = str.length -1; i >= 0; i--){
    reversedString += str[i]
   }
   return reversedString
}
