// Author: Shukria Sultani
// Date:11/19/2025
// Problem: Write tests for a function that checks of a year is a leap year.
import { isLeapYear } from './question-10.js'; 


  test('should return "Leap Year" for years divisible by 4 but not 100', () => {
    expect(isLeapYear(2024)).toBe("Leap Year");
    expect(isLeapYear(2008)).toBe("Leap Year");
    expect(isLeapYear(1996)).toBe("Leap Year");
  });

  test('should return "Leap Year" for years divisible by 400', () => {
    expect(isLeapYear(2000)).toBe("Leap Year");
    expect(isLeapYear(1600)).toBe("Leap Year");
  });

  test('should return "Not Leap year" for common years not divisible by 4', () => {
    expect(isLeapYear(2023)).toBe("Not Leap year");
    expect(isLeapYear(2018)).toBe("Not Leap year"); 
    expect(isLeapYear(2029)).toBe("Not Leap year");
  });
  
  test('should return "Not Leap year" for years divisible by 100 but not 400', () => {
    expect(isLeapYear(1900)).toBe("Not Leap year");
    expect(isLeapYear(2100)).toBe("Not Leap year");
  });

  test('should return error message for non-number input', () => {
    expect(isLeapYear("year")).toBe("Input must be a number");
    expect(isLeapYear(null)).toBe("Input must be a number");
  });

  test('should return error message for input less than or equal to 0', () => {
    expect(isLeapYear(0)).toBe("Input must be greater than 0");
    expect(isLeapYear(-200)).toBe("Input must be greater than 0");
  });
