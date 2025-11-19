// Author:  Shukria Sultani
// Date: 11/19/2025
// Problem: Write a function to check if a year is a leap year

// Solution: I can use if (||, &&) to check if the year is a leap year. The function checks if the year is divisible by 4 and not divisible by 100 or if it is divisible by 400, if this conditions are true returns leap year if not, it is not a leap year.

export const isLeapYear = (year)=>{
     if(typeof(year) !== "number"){
            return "Input must be a number"
     }
     if(year <= 0 ){
        return "Input must be greater than 0"
     }
     if(year % 4 === 0 &&  year % 100 !== 0 || year % 400 === 0){
        return "Leap Year"
     }
     else{
        return "Not Leap year"
     }
}
