//Author: Shukria Sultani
//Date:  11/17/2025
//Problem:  Find the largest and smallest of three numbers

//Solution: For solving this problem I can save the three input numbers in an array. 
// I can create the largest and smallest variables and assign them the first array index value. Next, I need to iterate over the array and check if the current array index value is larger that the largest value and update the largest variable.
//  For finding the smallest I need to check if the current array index value is smaller than the smallest value and update the smallest variable. At the end I return both the smallest and largest in an array.
export const smallestLargest  = (num1, num2, num3)=>{

  let numbersArray = [num1, num2, num3]
    let largest = numbersArray[0]
  let smallest = numbersArray[0]
  for(let i = 0; i < numbersArray.length; i++){
    if(numbersArray[i] > largest){
        largest = numbersArray[i]
    }
    if(numbersArray[i] < smallest){
        smallest = numbersArray[i]
    }
  }
  return [`Smallest: ${smallest}`, `Largest: ${largest}`]
}
