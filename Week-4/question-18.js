// Author : Shukria Sultani
// Date: 12/16/2025
// Problem: 18. Implement a Stack (Array-Based)
// Operations: push, pop, peek, isEmpty.

export class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

