// Author:  Shukria Sultani
//Date: 11/19/2025
//Problem: Write tests for the function that return the month description based on the month number
import { getMonthDescription } from "./question-13.js";

test("Should return 'January, 31 days' if the input is 1", ()=>{
    expect(getMonthDescription(1)).toBe("January, 31 days")
})
test("Should return 'February, 28 or 29 days' if the input is 2", ()=>{
    expect(getMonthDescription(2)).toBe("February, 28 or 29 days")
})
test("Should return 'March, 31 days' if the input is 3", ()=>{
    expect(getMonthDescription(3)).toBe("March, 31 days")
})
test("Should return 'April, 30 days' if the input is 4", ()=>{
    expect(getMonthDescription(4)).toBe("April, 30 days")
})
test("Should return 'May, 31 days' if the input is 5", ()=>{
    expect(getMonthDescription(5)).toBe("May, 31 days")
})
test("Should return 'June, 30 days' if the input is 6", ()=>{
    expect(getMonthDescription(6)).toBe("June, 30 days")
})
test("Should return 'July, 31 days' if the input is 7", ()=>{
    expect(getMonthDescription(7)).toBe("July, 31 days")
})
test("Should return 'August, 31 days' if the input is 8", ()=>{
    expect(getMonthDescription(8)).toBe("August, 31 days")
})
test("Should return 'September, 30 days' if the input is 9", ()=>{
    expect(getMonthDescription(9)).toBe("September, 30 days")
})
test("Should return 'October, 31 days' if the input is 10", ()=>{
    expect(getMonthDescription(10)).toBe("October, 31 days")
})
test("Should return 'November, 30 days' if the input is 11", ()=>{
    expect(getMonthDescription(11)).toBe("November, 30 days")
})
test("Should return 'December, 31 days' if the input is 12", ()=>{
    expect(getMonthDescription(12)).toBe("December, 31 days")
})
test("Should return error message for non-numeric inputs", ()=>{
    expect(getMonthDescription("abc")).toBe("Input must be a number")
    expect(getMonthDescription(null)).toBe("Input must be a number")
    expect(getMonthDescription(undefined)).toBe("Input must be a number")

})
test("Should return error message for inputs smaller than 1", ()=>{
    expect(getMonthDescription(0)).toBe("Input must be a number between 1-12")
    expect(getMonthDescription(-1)).toBe("Input must be a number between 1-12")
})
test("Should return error message for inputs greater than 12", ()=>{
    expect(getMonthDescription(13)).toBe("Input must be a number between 1-12")
})
