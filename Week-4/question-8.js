// Author: Shukria Sultani
// Date: 12/8/2025
// Problem: 8. Menu-Based ATM System
// Description: Handle options for balance, withdraw, deposit, exit.
// Example: "100 withdrawn successfully"

const atmSystem = ()=>{
    let exit = false
    let balance = 10000
    while(!exit){
        let userChoice = parseInt(prompt(`Hey Welcome!
            1. Balance
            2. Deposit
            3. Withdraw
            4. Exit
            `))
        if(userChoice === 1){
            alert(`Your balance is ${balance}`)
        }else if(userChoice === 2){
            let amount = parseInt(prompt("Enter the amount you want to add: "))
            balance += amount
            alert(`Added ${amount}! Your current balance is ${balance}`)
        }
        else if(userChoice === 3){
            let amount = parseInt(prompt("Enter the amount to withdraw: "))
            if(balance > amount){
             balance -= amount
             alert(`Successfully withdraw ${amount}, you current balance is ${balance}`)
            }else{
                alert("Your balance is low you cannot withdraw money.")
            }
        }
        else if(userChoice === 4){
        alert("Thanks you for using our services") 

            exit = true 
        }
        else{
            alert("Make sure you entered the correct number")
        }
    }
}
atmSystem()