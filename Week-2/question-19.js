// Author: Shukria Sultani
// Date: 11/20/2025
// Problem: Reverse a number


// How this function works?
// 1. It converts the number to string I do this to handle negative numbers 
// 2. It defines an empty array to later add the number digits.
// 3. It loops through the number string and add each character of the string from the end to the numbers array
// 4. To handle the negative numbers correctly it checks if the numbers array contains the (-) sign
// 5. If the array contains a (-) sign it assigns it to the sign variable and delete that sign from the array
// 6. It joins elements and add the sign to the front
// 7. It converts the result to a number and its returns it.
export const reverseNumber = (num)=>{
    if(typeof num !== "number"){
        return "Input must be a number."
    }
    let numAsString = String(num);
    let numbers= []
    for(let i = numAsString.length -1 ; i >= 0; i--){
        numbers.push(numAsString[i])
    }
    let sign = "";
    if(numbers.includes("-")){
        sign = numbers[numbers.length-1]
        numbers.pop();     
    }
    let joinedElements = numbers.join("")
    let addSign = sign+joinedElements
     
    return Number(addSign)
}
