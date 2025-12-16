// Author : Shukria Sultani
// Date: 12/16/2025
// Problem: 19. Implement a Queue Using Two Stacks

import {Queue} from "./question-19.js"

let queue = new Queue()
test("Should add elements", ()=>{
    expect(queue.enQueue(1)).toBe()
    expect(queue.enQueue(2)).toBe()
    expect(queue.enQueue(3)).toBe()
    expect(queue.enQueue(4)).toBe()
})
test("Should get the first element", ()=>{
    expect(queue.peek()).toBe(1)
})
test("Should handle the empty function",()=>{
    expect(queue.isEmpty()).toBe(false)
})