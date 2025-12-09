// Author: Shukria Sultani
//Date: 11/18/2025
// Problem:  Grade Calculator (0–100 → A–F)

// Solution: To grade the students based on their scores I can use switch to consider different cases to grade the student 

// score >= 90 A
// score >= 80 B
// score >= 70 C
// Score >= 60 D
// Score >= 50 E
// Score < 50 F

export const calculateGrade = (score)=>{
    switch(true ){
        case (score < 0 || score > 100 || isNaN(score)) || score === null:
            return "Invalid input: Score must be between 0 and 100"
        case (score >= 90):
            return "A"
        case (score >= 80):
            return "B"
        case (score >=70):
            return "C"
        case (score >= 60):
            return "D"
        case (score >= 50):
            return "E"
        case (score < 50):
            return "F"
        default:
        return "Invalid input"
    }
}

