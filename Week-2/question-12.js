// Author: Shukria Sultani
// Date: 11/19/2025
// Problem: Traffic Light System using switch-case

export const trafficLights = (light)=>{
    if(light === "" || typeof light !== "string"){
        return "Empty or non-string input!"
    }

    switch(light.toLowerCase()){
        case "red":
            return "Stop"
        case "yellow":
            return "Ready"
        case "green":
            return "Go"
        default: 
         return "Make sure you spelled the light correctly!"
    }
}
