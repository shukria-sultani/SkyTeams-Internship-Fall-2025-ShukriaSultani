// Author: Shukria Sultani
// Date: 11/18/2025
// Problem: Write tests for that function that converts a total of seconds into formatted hour, min, and sec
import {convertSecond} from "./question-6.js"

test("Should return the formatted hr, min, sec for a basic input", ()=>{
    expect(convertSecond(3665)).toBe("1 hr, 1 min, 5 sec")
})

test("Should handle decimal inputs by rounding or truncating seconds", ()=>{
    expect(convertSecond(2345.67)).toBe("0 hr, 39 min, 5 sec") 
})

test("Should handle 0 input", ()=>{
    expect(convertSecond(0)).toBe("0 hr, 0 min, 0 sec")
})

test("Should handle large total of seconds", ()=>{
    expect(convertSecond(65789000)).toBe("18274 hr, 43 min, 20 sec")
})

test("Should handle single-digit values with correct formatting", ()=>{
    expect(convertSecond(65)).toBe("0 hr, 1 min, 5 sec")
});

test("Should handle inputs less than a minute", ()=>{
    expect(convertSecond(45)).toBe("0 hr, 0 min, 45 sec")
});

test("Should handle inputs that are exact hours or minutes", ()=>{
    expect(convertSecond(3600)).toBe("1 hr, 0 min, 0 sec")
    expect(convertSecond(120)).toBe("0 hr, 2 min, 0 sec")
});

test("Should handle negative input", ()=>{
    expect(convertSecond(-100)).toBe("Seconds cannot be negative") 
});
 test("Should handle inputs that are not number",()=>{
    expect(convertSecond("abc")).toBe("Invalid input")
 })
