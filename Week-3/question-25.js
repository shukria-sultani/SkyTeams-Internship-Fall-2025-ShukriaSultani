const guessNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    
    let guessedNumber; 

    do {
        guessedNumber = parseInt(prompt("Guess a Number"));

        if (guessedNumber > randomNumber) {
            alert("Too High");
        } else if (guessedNumber < randomNumber) { 
            alert("Too low");
        } else if (guessedNumber === randomNumber) {
            alert("Correct!");
            
        } else {
            alert("Please enter a valid number."); 
        }

    } while (guessedNumber !== randomNumber);
}


guessNumber()