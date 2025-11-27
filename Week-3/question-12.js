// Author: Shukria Sultani
// Date: 11/27/2025
// Problem: Check for palindrome number

export const isPalindrome = (n)=>{
    if(typeof n !== "number"){
        return "Input must be a number."
    }
    let number = n
    let numbersArr = []
    while(n !== 0){
        let remainder = n % 10
        numbersArr.push(remainder)
        n = Math.floor(n / 10)
    }
    let joinedElements = numbersArr.join("")
    let reversedNumber = Number(joinedElements)

    if(number === reversedNumber){
        return true
    }
    return false
}
console.log(isPalindrome(121))
console.log(isPalindrome(122))