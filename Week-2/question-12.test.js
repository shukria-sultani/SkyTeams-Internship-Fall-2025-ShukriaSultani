// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Write tests for the function that return the meaning of each traffic light.

import { trafficLights } from "./question-12.js";

test("Should handle basic input for 'red' ", ()=>{
    expect(trafficLights("red")).toBe("Stop")
})
test("Should handle basic input for 'yellow' ", ()=>{
    expect(trafficLights("yellow")).toBe("Ready")
})
test("Should handle basic input for 'green' ", ()=>{
    expect(trafficLights("green")).toBe("Go")
})
test("Should return error message for empty string input", ()=>{
    expect(trafficLights("")).toBe("Empty or non-string input!")
})
test("Should return error message for non-string input", ()=>{
    expect(trafficLights(12)).toBe("Empty or non-string input!")
    expect(trafficLights(null)).toBe("Empty or non-string input!")
    expect(trafficLights(undefined)).toBe("Empty or non-string input!")
})
test("Should return error message for misspelled input", ()=>{
    expect(trafficLights("rad")).toBe("Make sure you spelled the light correctly!"),
    expect(trafficLights("yelloow")).toBe("Make sure you spelled the light correctly!"),
    expect(trafficLights("gren")).toBe("Make sure you spelled the light correctly!")
})
