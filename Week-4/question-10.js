
//problem : Check Unique Characters
// Description: Return whether a string contains only unique chars.
// Example:
// "hello" → Not Unique
export const isUnique = (str)=>{
    if(typeof str !== "string"){
        return "Input must be a string."
    }
      let arr = Array.from(str)
      let set = new Set(arr)
      let uniqueArray = Array.from(set)
       if(arr.length === uniqueArray.length ){
        return true
       }
       else{
        return false
       }
}
console.log(isUnique("hello"))
console.log(isUnique("my"))
console.log(isUnique("Zahra"))
