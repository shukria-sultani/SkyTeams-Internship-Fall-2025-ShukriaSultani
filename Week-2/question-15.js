// Author : Shukria Sultani
// Date: 11/20/2025
// Problem: Triangle validity and type

export const isTriangle =(s1, s2, s3)=>{
    if(typeof s1 !== "number" || typeof s2 !== "number" || typeof s3 !== "number"){
        return "Inputs must be numbers"
    }
    let validTriangle = (s1 + s2 > s3) && (s2 + s3 > s1) && (s1 + s3 > s2)
    if(!validTriangle){
      return "Not a valid triangle"
    }
    if(s1 === s2 && s2 === s3){
        return  "Valid triangle, Equilateral"
    }
    else if(s1 === s2 || s1 === s3 || s2 === s3){
        return "Valid triangle, Isosceles"
    }
    else{
        return "Valid triangle, Scalene"
    }
  
}
