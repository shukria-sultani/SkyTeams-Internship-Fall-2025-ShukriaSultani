// Author : Shukria Sultani
// Date: 12/16/2025
// Problem: 19. Implement a Queue Using Two Stacks

import { Stack } from "./question-18.js";

export class Queue {
  constructor() {
    this.items1 = new Stack();
    this.items2 = new Stack();
  }
  enQueue(item) {
    this.items1.push(item);
  }
  deQueue() {
    if (this.items2.isEmpty()) {
      while (!this.items1.isEmpty()) {
        this.items2.push(this.items1.pop());
      }
    }
    return this.items2.pop();
  }
  peek() {
      if (this.items2.isEmpty()) {
      while (!this.items1.isEmpty()) {
        this.items2.push(this.items1.pop());
      }
    }
    return this.items2.peek();
  }
  isEmpty(){
     return this.items1.isEmpty() && this.items2.isEmpty()
  }
}
