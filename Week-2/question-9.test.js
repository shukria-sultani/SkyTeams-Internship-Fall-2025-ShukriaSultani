// Author: Shukria Sultani
// Date: 11/18/2025
// Problem: Write tests for the function that calculates the the grade of students based on their scores.

import { calculateGrade } from './question-9.js';


  test('should return "A" for scores 90 and above', () => {
    expect(calculateGrade(90)).toBe('A');
    expect(calculateGrade(95)).toBe('A');
    expect(calculateGrade(100)).toBe('A');
  });

  test('should return "B" for scores 80 to 89', () => {
    expect(calculateGrade(80)).toBe('B');
    expect(calculateGrade(85)).toBe('B');
    expect(calculateGrade(89.9)).toBe('B'); 
  });

  test('should return "C" for scores 70 to 79', () => {
    expect(calculateGrade(70)).toBe('C');
    expect(calculateGrade(75)).toBe('C');
    expect(calculateGrade(79)).toBe('C');
  });

  test('should return "D" for scores 60 to 69', () => {
    expect(calculateGrade(60)).toBe('D');
    expect(calculateGrade(65)).toBe('D');
    expect(calculateGrade(69)).toBe('D');
  });

  test('should return "E" for scores 50 to 59', () => {
    expect(calculateGrade(50)).toBe('E');
    expect(calculateGrade(55)).toBe('E');
    expect(calculateGrade(59)).toBe('E');
  });

  test('should return "F" for scores 0 to 49', () => {
    expect(calculateGrade(0)).toBe('F');
    expect(calculateGrade(25)).toBe('F');
    expect(calculateGrade(49)).toBe('F');
  });

  test('should handle scores above 100 as invalid input', () => {
    const expectedErrorMessage = "Invalid input: Score must be between 0 and 100";
    expect(calculateGrade(101)).toBe(expectedErrorMessage);
    expect(calculateGrade(5000)).toBe(expectedErrorMessage);
  });

  test('should handle scores below 0 as invalid input', () => {
    const expectedErrorMessage = "Invalid input: Score must be between 0 and 100";
    expect(calculateGrade(-1)).toBe(expectedErrorMessage);
    expect(calculateGrade(-50)).toBe(expectedErrorMessage);
  });
  
  test('should handle non-numeric input as invalid input', () => {
    const expectedErrorMessage = "Invalid input: Score must be between 0 and 100";
    expect(calculateGrade("hello")).toBe(expectedErrorMessage);
  });

    test('should handle null input as invalid input', () => {
    const expectedErrorMessage = "Invalid input: Score must be between 0 and 100";
    expect(calculateGrade(null)).toBe(expectedErrorMessage);
  });
    test('should handle undefined input as invalid input', () => {
    const expectedErrorMessage = "Invalid input: Score must be between 0 and 100";
    expect(calculateGrade(undefined)).toBe(expectedErrorMessage);
  });