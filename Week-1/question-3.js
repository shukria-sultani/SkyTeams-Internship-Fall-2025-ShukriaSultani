//Author: Shukria Sultani
//Date: 11/16/2025
//Problem: Write a function that finds the largest number in an array

//Solution: This problem can be solved in two ways, using sort array method and looping through the array. 
// 1. Using the sort method I only need to pass two arguments for the sort function and subract the first argument from the second to get a descending order and then I can return the first element as the largest one. I also used spread operator here to prevent the main array from getting sroted.
//  2. I can declare a variable before the loop and save the first array element and then loop through the array and compare current index value with the variable value and update the variable if the current index value is greater than what is saved in the variable. As the function can only have one retrun statement. I am uisng the first solution the sort method which is very clean and readable but I have also put the second the loop solution in comments.


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


