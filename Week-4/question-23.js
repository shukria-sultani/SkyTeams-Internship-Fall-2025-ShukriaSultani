// Author: Shukria Sultani
// Date: 12/20/2025
// Problem: 23. Top K Frequent Elements
// Input: [1,1,1,2,2,3], k=2 → [1,2]

export const getKFrequentElements = (array, k)=>{
    if(!Array.isArray(array)){
        return "Input must be an array."
    }
    if(typeof k !== "number"){
        return "The K value should be a number."
    }
    let elementsWithOccurance = {}
    for(let i = 0; i < array.length; i++){
        let element = array[i]
        if(element in elementsWithOccurance){
            elementsWithOccurance[element]++
        }else{
            elementsWithOccurance[element] = 1
        }
    }
   let elementsArray = Object.entries(elementsWithOccurance)

   let sortedArray = []
   while(elementsArray.length > 0){
    let  largeIndex = 0
    for(let i = 0; i < elementsArray.length; i++){
        if(elementsArray[i][1] > elementsArray[largeIndex][1]){
            largeIndex  = i
        }
    }
    let largeNum = elementsArray[largeIndex];
    sortedArray.push(largeNum);
    elementsArray.splice(largeIndex, 1);
   }
   let kFrequent = sortedArray.slice(0, k)
   let result = []
   for(let i = 0; i < kFrequent.length;i++){
    let convertToNumber = parseInt(kFrequent[i][0])
    result.push(convertToNumber)
   }
  return result
}
console.log(getKFrequentElements([1,1,1,2,2,3,3,3,3,3,3], 2))