// Author : Shukria Sultani
// Date: 11/20/2025
// Problem: Multiplication table of a number

export const createMultiplicationTbl = (num, limit = 10)=>{
    if(typeof num !== "number" || typeof limit !== "number" ){
         return "Inputs must be number."
    }
    if(!Number.isInteger(num) || !Number.isInteger(limit)){
        return "Inputs must be whole number."
    }
    if(num <= 0 || limit <=0){
        return "Inputs cannot be zero or negative number."
    }
     let result = []

     for(let i = 1; i <= limit ;i++){
         let multiply = `${num} x ${i} = ${num * i}` 
         result.push(multiply)
     }
     return result
}
console.log(createMultiplicationTbl(2))
console.log(createMultiplicationTbl(4))
console.log(createMultiplicationTbl(5, 6))