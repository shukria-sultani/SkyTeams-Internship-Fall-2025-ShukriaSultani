// Author :Shukria Sultani
// Date: 11/29/2025
// Problem: Pattern Printing – Right-aligned Triangle

const printRightATriangle = (n)=>{
   
  for(let i = 1 ;  i<= n; i++){
     let row  =""
     let space = n
     for(let j = 1; j <= i; j++){
        row +="*"
          space --
     }
     console.log(" ".repeat(space), row)
 
  }
}
printRightATriangle(10)