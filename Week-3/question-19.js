// Author: Shukria Sultani
// Date: 11/29/2025
// Problem: Print Pyramid

const printPyramid = (n)=>{
    for(let i = 1; i <= n; i++){
        let row = ""
        let space = n *2
        for (let j = 1; j <= i*2 -1; j++){
            row += "*"
            space--
        }
        console.log(" ".repeat(space / 2) + row + " ".repeat(space/2))
    }

}
printPyramid(6)
