// Author : Shukria Sultani
// Date: 11/25/2025
// Problem: Write a function to check if an array contains a specific element

export const findElement = (arr, element)=>{
if(!Array.isArray(arr)){
    return "Input must contain an array."
}
if(element === undefined || element === null){
    return "Enter an element to search for."
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] === element){
        return "Found"
    }
}
return "Not Found"
}
