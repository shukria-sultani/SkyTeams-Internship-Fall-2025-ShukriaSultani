// Author: Shukria Sultani
// Date: 12/20/2025
// problem: Write tests for the function that finds the top K frequent elements.

import { getKFrequentElements } from "./question-23.js";

test("Should handle basic input", ()=>{
    expect(getKFrequentElements([1,1,1,2,2,3,3,3,3,3,3], 2)).toEqual([ [ '3', 6 ], [ '1', 3 ] ])
})
test("Should handle non-array inputs",()=>{
    expect(getKFrequentElements(1234, 3)).toBe("Input must be an array.")
    expect(getKFrequentElements(null, 3)).toBe("Input must be an array.")
    expect(getKFrequentElements(undefined, 3)).toBe("Input must be an array.")
})
test("Should hanlde non-numeric inputs for K value", ()=>{
    expect(getKFrequentElements([1,2,2,2,3,3], "abc")).toBe("The K value should be a number.")
    expect(getKFrequentElements([1,2,2,2,3,3], null)).toBe("The K value should be a number.")
    expect(getKFrequentElements([1,2,2,2,3,3], undefined)).toBe("The K value should be a number.")
})