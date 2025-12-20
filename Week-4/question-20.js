// Author : Shukria Sultani
// Date: 12/17/2025
// Problem: . Check Balanced Parentheses
// Input: "{[()]}" → Output: Balanced

export const isBalancedParentheses = (str)=>{
   let parenthesesObject = {
        "(": ")",
        "{": "}",
        "[": "]"
   }
   let stack = []
   for(let bracket of str){
    if(parenthesesObject[bracket]){
        stack.push(bracket)
    }
    else{
        let last = stack.pop()
        if(parenthesesObject[last] !== bracket){
            return "Not Balanced"
        }
    }
   }
   if(stack.length === 0){
    return "Balanced"
   }
   else{
    return "Not Balanced"
   }
}
console.log(isBalancedParentheses("{[(]]}"))