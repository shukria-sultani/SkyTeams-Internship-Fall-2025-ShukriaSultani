//Author: Shukria Sultani
//Date:  11/17/2025
//Problem: Calculate the area and perimeter of a rectangle

//Solution: to calculate the area I can multiply w (width) by l (length). 
// To calculate the perimeter I can multiply w by 2 and add that to l multiplied by 2 because a rectangle has two equal lengths and two equal widths
// The formatNumber function is there to handle the floating-point precision in decimal numbers. It receives a number and rounds it to five decimal digits using .toFixed(5) and then changes it back to a number using parseFloat() to remove the trailing .0 after the decimal point in whole numbers. At last, it changes the number back to a string using .toString().
const formatNumber = (num)=>{
  let preciseNum = parseFloat(num.toFixed(5))
  return preciseNum.toString()
}
export const calculateRectangleProperties = (w, l)=>{

  const area = w*l
  const perimeter = (w*2) + (l*2)
  const formattedArea = formatNumber(area)
  const formattedPerimeter = formatNumber(perimeter)

  return ([`Area: ${formattedArea}`, `Perimeter: ${formattedPerimeter}`])
}
