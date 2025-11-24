// Author: Shukria Sultani
// Date: 11/24/2025
// Problem:Fibonacci series up to N terms

export const createFibonacci = (n) => {
    if(typeof n !== "number" ){
        return "Input must be a number."
    } 
    if(!Number.isInteger(n)){
        return "Input must be a whole number."
    }
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    }

    let fibonacci = [];
    let a = 0;
    let b = 1;
    fibonacci.push(a);
    fibonacci.push(b);
    for (let i = 2; i < n; i++) {
        let newTerm = a + b;
        fibonacci.push(newTerm);
        a = b;
        b = newTerm;
    }
    return fibonacci
};


