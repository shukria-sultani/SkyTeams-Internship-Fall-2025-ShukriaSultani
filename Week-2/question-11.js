// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Simple Calculator using switch-case

//Solution: To calculate two numbers based on an operator I can use switch to check the different operator values and decide what operation to do based on that. 

export const calculate = (num1, num2, operator) => {
    const operators = ["+", "-", "*", "/"];

    if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "Inputs should be numbers.";
    }

    if (!operators.includes(operator)) {
        return "Operator is not valid.";
    }

    switch (operator) {
        case "+":
            return num1 + num2;
        case "*":
            return num1 * num2;
        case "-":
            return num1 - num2; 
        case "/":
            return num1 / num2;
        default:
            return "Something went wrong"; 
    }
};


