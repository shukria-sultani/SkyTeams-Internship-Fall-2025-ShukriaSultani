// Author : Shukria Sultani
// Date: 12/16/2025
// Problem: 18. Implement a Stack (Array-Based)
// Operations: push, pop, peek, isEmpty.

class Stack {
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
let programmingLanguages = new Stack();
programmingLanguages.push("JavaScript");
programmingLanguages.push("Java");
programmingLanguages.push("Python");
programmingLanguages.push("C++");
programmingLanguages.push("C#");

let removeTheLastItem = programmingLanguages.pop();
let getLastItem = programmingLanguages.peek();
console.log(programmingLanguages.isEmpty());
console.log(programmingLanguages);
console.log(removeTheLastItem);
console.log(getLastItem);
