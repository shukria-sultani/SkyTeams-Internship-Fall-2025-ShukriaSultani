//Author: Shukria Sultani
//Date: 11/16/2025
//Problem: Write a function that finds the largest number in an array


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


