//Author: Shukria Sultani
//Date:  11/17/2025
//Problem: Write tests for a function that calculates the area and perimeter of a rectangle
import {calculateRectangleProperties} from "./question-3.js"

test("Calculate the area and perimeter of a triangle with basic inputs", ()=>{
    expect(calculateRectangleProperties(10, 6)).toBe("Area: 60, Perimeter: 32")
})
test("Handle decimal inputs", ()=>{
    expect(calculateRectangleProperties(4.5, 2.4)).toBe("Area: 10.8, Perimeter: 13.8")
})
test("Handle zero as an input", () => {
    expect(calculateRectangleProperties(0, 5)).toBe("Area: 0, Perimeter: 10");
});

test("Handle very large numbers", () => {
    expect(calculateRectangleProperties(1000000, 500000)).toBe("Area: 500000000000, Perimeter: 3000000");
});

test("Handle small numbers (close to zero)", () => {
    expect(calculateRectangleProperties(0.001, 0.002)).toBe("Area: 0, Perimeter: 0.006");
});

