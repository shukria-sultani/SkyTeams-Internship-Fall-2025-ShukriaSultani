// Author : Shukria Sultani
// Date: 12/16/2025
// Problem: 18. Implement a Stack (Array-Based)
// Operations: push, pop, peek, isEmpty.

import { Stack } from "./question-18.js";

let items = new Stack()
test("Should add elements",()=>{
    expect(items.push(4)).toBe()
    expect(items.push(8)).toBe()
    expect(items.push(10)).toBe()
    expect(items.push(12)).toBe()
})
test("Should remove the last element added", ()=>{
    expect(items.pop()).toBe(12)
})
test("Get the last element without removing", ()=>{
    expect(items.peek()).toBe(10)
})
test("Should handle the empty function", ()=>{
    expect(items.isEmpty()).toBe(false)
})