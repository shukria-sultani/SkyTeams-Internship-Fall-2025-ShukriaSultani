// Author: Shukria Sultani
// Date: 11/16/2025
// Problem: Write tests for the function that adds two numbers
import {addTwoNumbers} from "./question-1.js"
test("Add two  positive numbers", ()=>{
     expect(addTwoNumbers(7, 10)). toBe(17)
})
test("Add a number with zero", ()=>{
     expect(addTwoNumbers(7, 0)). toBe(7)
})
test("Add a positive and negative number", ()=>{
     expect(addTwoNumbers(-7, 10)). toBe(3)
})
test("Add two negative numbers", ()=>{
     expect(addTwoNumbers(-4, -5)). toBe(-9)
})

