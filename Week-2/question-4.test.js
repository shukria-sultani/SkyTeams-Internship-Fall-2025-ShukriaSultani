import { tempConverter } from "./question-4.js";

test("Should convert a standard Celsius temperature to Fahrenheit correctly", () => {
    expect(tempConverter(25, "c")).toBe("77°F");
});

test("Should convert the freezing point of water from Celsius to Fahrenheit", () => {
    expect(tempConverter(0, "C")).toBe("32°F");
});

test("Should handle lower-case unit input 'f' for Fahrenheit conversion", () => {
    expect(tempConverter(212, "f")).toBe("100°C");
});

test("Should handle negative temperatures in Celsius", () => {
    expect(tempConverter(-40, "C")).toBe("-40°F");
});

test("Should handle decimal results for Celsius conversion", () => {
    expect(tempConverter(75, "F")).toBe("23.88889°C"); 
});

test("Should return an error message for an invalid unit input", () => {
    expect(tempConverter(100, "K")).toBe("Invalid Unit");
});
