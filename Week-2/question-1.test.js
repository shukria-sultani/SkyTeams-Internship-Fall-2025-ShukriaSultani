// Author: Shukria Sultani
// Date: 11/17/2025
//Problem: Write tests for the function that swaps two variables without using a temporary variable
import { swapVariables } from "./question-1.js"
test("Should swap the variables of a simple input", ()=>{
    expect(swapVariables(10, 5)).toEqual([5, 10])
})
test("Should swap the variables of they type number and string", ()=>{
    expect(swapVariables(10, "HI")).toEqual(["HI", 10])
})
test("Should swap variables containing object", ()=>{
    const obj1 = {"name": "Shukria", "age": 20}
    const obj2 = {"name": "Zahra", "age": 18}
    expect(swapVariables(obj1, obj2)).toEqual([obj2, obj1])
})
test("Should swap the variables containing array", ()=>{
    const arr1 = ["apple", "pear", "peach"]
    const arr2 = ["grape", "mango", "banana"]
    expect(swapVariables(arr1, arr2)).toEqual([arr2, arr1])
})
test("Should swap zero and negative number", ()=>{
    expect(swapVariables(-10, 0)).toEqual([0, -10])
})