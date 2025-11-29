// Author: Shukria Sultani
// Date: 11/29/2025
// Problem: Pattern Printing – Right-angled Triangle

export const printPattern =(n)=>{
    for(let i = 1 ; i <= n; i++){
        let row = ""
        for(let j = 1;  j <= i; j++){
           row += "*"
        }
        console.log(row)

    }

}
printPattern(3)