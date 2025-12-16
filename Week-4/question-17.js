// Author: Shukria Sultani 
// Date: 12/15/2025
// Problem: 17. Sentence Abbreviation
// Description: Convert sentence into first-letter abbreviation.
// Example: "I am learning JavaScript" → "I a l J"


export const abbreviateString = (str)=>{
    if(typeof str !== "string"){
        return "Input must be a string."
    }
    let splitted = str.split(" ")
    let abbreviations = []
     splitted.forEach(element => {
        let newArray = Array.from(element)
        abbreviations.push(newArray[0])
     });
     let joinedString = abbreviations.join(" ")
    return joinedString
}
console.log(abbreviateString("I am in the class"))