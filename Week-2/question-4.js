//Author: Shukria Sultani
//Date:  11/17/2025
//Problem: Convert temperature from Celsius to Fahrenheit and vice versa.

//Solution: I need to write s single function that accepts both a temperature value and a unit identifier ("c" or "f"). Using conditional logic, the function applies the appropriate formula: F=(C* 9/5)+32 to convert Celsius to Fahrenheit, or C=(F-32) * 5/9 to convert Fahrenheit to Celsius. The formatNumber function manages the floating-point precision of the result, ensuring clean decimal representation before the final string, including the correct degree symbol, is returned.
 const formatNumber= (num) => {
    let preciseNum = parseFloat(num.toFixed(5));
    return preciseNum.toString();
};
export const tempConverter = (value, unit) => {
    if (unit.toLowerCase() === "c") {
        let fahrenheit = (value * 9/5) + 32;
        return formatNumber(fahrenheit) + "°F"; 
    }
    else if (unit.toLowerCase() === "f") {
        let celsius = (value - 32) * 5/9;
        return formatNumber(celsius) + "°C"; 
    }
    else {
        return "Invalid Unit";
    }
}