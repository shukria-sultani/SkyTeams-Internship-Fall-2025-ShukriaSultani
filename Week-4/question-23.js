// Author: Shukria Sultani
// Date: 12/20/2025
// Problem: 23. Top K Frequent Elements
// Input: [1,1,1,2,2,3], k=2 → [1,2]

export const getKFrequentElements = (array, k)=>{
    let frequents = []
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
   let sortedArray = elementsArray.sort((a, b)=> b[1] -a[1])
   let kFrequent = sortedArray.slice(0, k)
   console.log(kFrequent)
}
getKFrequentElements([1,1,1,2,2,3,3,3,3,3,3], 2)