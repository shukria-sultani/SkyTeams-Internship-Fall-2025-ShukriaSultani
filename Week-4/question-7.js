//Author : Shukria Sultani
// Date: 12/8/2025
// Problem: Rock, Paper, Scissors Game
// Description: Simulate a game using random computer choices.
const rockPaperScissorsGame = () => {
  let answerArray = ["paper", "rock", "scissors"];
  let computerAnswer = Math.floor(Math.random() * answerArray.length);

  let userAnswer = prompt("Rock, Paper or Scissors: ");

  if (
    userAnswer.toLowerCase() === "rock" &&
    answerArray[computerAnswer] === "paper"
  ) {
    alert("Computer Won!");
  } else if (
    userAnswer.toLowerCase() === "paper" &&
    answerArray[computerAnswer] === "rock"
  ) {
    alert("You Won!");
  } else if (
    userAnswer.toLowerCase() === "rock" &&
    answerArray[computerAnswer] === "scissor"
  ) {
    alert("You Won!");
  } else if (
    userAnswer.toLowerCase() === "scissors" &&
    answerArray[computerAnswer] === "rock"
  ) {
    alert("Computer Won!");
  } else if (
    userAnswer.toLowerCase() === "scissors" &&
    answerArray[computerAnswer] === "paper"
  ) {
    alert("You Won!");
  } else if (
    userAnswer.toLowerCase() === "paper" &&
    answerArray[computerAnswer] === "scissors"
  ) {
    alert("Computer Won!");
  } else if (
    userAnswer.toLowerCase() === "rock" &&
    answerArray[computerAnswer] === "rock"
  ) {
    alert("It's a tie!");
  } else if (
    userAnswer.toLowerCase() === "paper" &&
    answerArray[computerAnswer] === "paper"
  ) {
    alert("It's a tie!");
  } else if (
    userAnswer.toLowerCase() === "scissors" &&
    answerArray[computerAnswer] === "scissors"
  ) {
    alert("It's a tie!");
  } else {
    alert("Make sure you have spelled you choice correctly!");
  }
};
rockPaperScissorsGame();
