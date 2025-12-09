//Author: Shukria Sultani
//Date: 11/16/2025
//Problem: Write a function that finds the largest number in an array


//Solution: I can declare a variable before the loop and save the first array element and then loop through the array and compare current index value with the variable value and update the variable if the current index value is greater than what is saved in the variable.

export const findLargestNum = (numArray) =>{
    if(numArray.length ==0){
        return "Array is empty"
    }

    let largestNum = numArray[0]
    for(let i = 0 ; i < numArray.length; i++){
        if(numArray[i] > largestNum){
            largestNum = numArray[i]
        }
    }
    return largestNum


}


