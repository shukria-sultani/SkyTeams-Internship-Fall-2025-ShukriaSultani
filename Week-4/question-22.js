// Author : Shukria Sultani
// Date: 12/21/2025
// problem: 22. Merge Overlapping Intervals
// Input: [[1,3],[2,6],[8,10]] → [[1,6],[8,10]]
export const findOverlappingIntervals = (intervals) => {
  if(!Array.isArray(intervals)){
    return "Input must be an array."
  }
    let result = [];
    let currentInterval = intervals[0]; 
  
    for (let i = 1; i < intervals.length; i++) {
      let nextInterval = intervals[i];
  
      if (nextInterval[0] <= currentInterval[1]) {
        // merge into current
        currentInterval = [
          currentInterval[0],
          Math.max(currentInterval[1], nextInterval[1])
        ];
      } else {
        // no overlap, push current
        result.push(currentInterval);
        currentInterval = nextInterval;
      }
    }
  
    result.push(currentInterval);
  return result
  };
  
  console.log(findOverlappingIntervals([[1,3],[2,6],[8,10]]));
  