// Author : Shukria Sultani
// Date: 11/24/2025
// Problem:  Count vowels in a string

export const countVowels = (str)=>{
    if(typeof str !== "string"){
        return "Input must be a string."
    }
    let count = 0
    let lowerCaseStr = str.toLowerCase()
    let vowels = ["a", "e", "i", "o", "u"]
    for(let i = 0; i < lowerCaseStr.length; i++ ){
       if(vowels.includes(lowerCaseStr[i])){
        count++
       }
    }
return count
}
countVowels("HEllo")
