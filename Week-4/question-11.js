// Author :Shukria Sultani
// Date: 12/13/2025
//Problem :  String Rotation Check
// Description: Check if one string is rotation of another.
// Example:
// "waterbottle", "erbottlewat" → True

export const isStringRotation = (original, rotation)=>{
    if(typeof original !== "string" || typeof rotation !== "string"
    ){
        return "Inputs must be string."
    }
    let doubleString = original + original
    if(original.length !== rotation.length){
        return false
    }
    let subString = new RegExp(rotation)
    if(subString.test(doubleString)){
        return true
    }else{
        return false
    }
}
console.log(isStringRotation("waterbottle", "erbottlewat"))