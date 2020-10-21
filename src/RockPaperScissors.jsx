import React from "react";

export function RockPaperScissors() {
  const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "bomb"
    ) {
      return userInput;
    } else {
      return "Error!";
    }
  };
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      default:
        break;
    }
  };
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === "bomb") {
      return "BOOM! Instant win!";
    } else if (userChoice === computerChoice) {
      return "Tie";
    } else {
      if (userChoice === "rock") {
        if (computerChoice === "paper") {
          return "Computer wins";
        } else {
          return "User wins";
        }
      } else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
          return "Computer wins";
        } else {
          return "User wins";
        }
      } else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
          return "Computer wins";
        } else {
          return "User wins";
        }
      }
    }
  };
  let userChoice = getUserChoice("rock");
  let computerChoice = getComputerChoice();
  return (
    <p>
      You threw {userChoice}. Computer threw {computerChoice}.
      {determineWinner(userChoice, computerChoice)}
    </p>
  );
}
