export const findOverlappingIntervals = (intervals) => {
    let result = [];
    let currentInterval = intervals[0]; // start with the first interval
  
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
  
    console.log(result);
  };
  
  findOverlappingIntervals([[1,3],[2,6],[8,10]]);
  