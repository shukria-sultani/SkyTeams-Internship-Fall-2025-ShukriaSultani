//Author: Shukria Sultani
//Date:  11/17/2025
//Problem:  Write tests for the function that finds the largest and smallest of three numbers

import {smallestLargest} from "./question-2.js"

test("Find the largest and smallest numbers in a basic input",()=>{
    expect(smallestLargest(100, 80, 5)).toBe("Smallest: 5 Largest: 100")
})
test("Handle negative numbers",()=>{
    expect(smallestLargest(-100, -80, -5)).toBe("Smallest: -100 Largest: -5")
}) 
test("Handle zero and negative number",()=>{
    expect(smallestLargest(-100, 0, -5)).toBe("Smallest: -100 Largest: 0")
})
test("Handle identical numbers",()=>{
    expect(smallestLargest(10, 10, 10)).toBe("Smallest: 10 Largest: 10")
})
test("Handle sorted numbers (ascending)",()=>{
    expect(smallestLargest(1,2,3)).toBe("Smallest: 1 Largest: 3")
})
test("Handle sorted numbers (descending)",()=>{
    expect(smallestLargest(3, 2, 1)).toBe("Smallest: 1 Largest: 3")
})
