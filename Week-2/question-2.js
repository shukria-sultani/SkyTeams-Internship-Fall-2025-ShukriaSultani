//Author: Shukria Sultani
//Date:  11/17/2025
//Problem:  Find the largest and smallest of three numbers

export const smallestLargest  = (a, b, c)=>{

  let numbersArray = [a, b, c]
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
// console.log(smallestLargest(10, 50, -4))
// console.log(smallestLargest(1, 5, 9))