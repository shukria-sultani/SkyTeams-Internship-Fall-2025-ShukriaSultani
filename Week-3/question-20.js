// Author: Shukria Sultani
// Date: 11/30/2025
// Problem: Body Mass Index (BMI) Calculator
// Description: Given weight (kg) and height (m), calculate BMI using:
// BMI = weight / (height * height)
// Then categorize it into:
// • Underweight: BMI < 18.5
// • Normal weight: 18.5 ≤ BMI < 25
// • Overweight: 25 ≤ BMI < 30
// • Obese: BMI ≥ 30
// Example:
// Input:
// 70, 1.75
// Output:
// BMI = 22.86 (Normal weight)

export const calculateBMI = (w, h)=>{
    if(typeof w !=="number" || typeof h !== "number"){
        return "Inputs must be numbers."
    }
    if(w <= 0 || h <= 0){
        return "Inputs must be non-zero, positive numbers."
    }
    const BMI = (w / (h * h)).toFixed(3)
  
     if(BMI < 18.5){
        return `BMI= ${BMI} (Underweight)`
     }
     else if(BMI < 25){
        return `BMI= ${BMI} (Normal weight)`
     }
     else if(BMI < 30){
        return `BMI= ${BMI} (Overweight)`
     }
     else{
        return `BMI= ${BMI} (Obese)`
     }
    
}
