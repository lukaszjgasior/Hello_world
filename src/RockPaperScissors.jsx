import React from "react";

export function RockPaperScissors() {
    const getUserChoice = userInput => {
        userInput = userInput.toLowerCase();
        if (userInput === 'rock' || userInput==='paper' || userInput==='scissors') {
            return userInput;
        } else {
            console.log('Error!');
        } 
    }
    const getComputerChoice = () => {
        let randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return 'rock';
                break;
            case 1:
                return 'paper';
                break;
            case 2:
                return 'scissors';
                break;
        }
    }
    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            return 'Tie';
        } else {
            if (userChoice === 'rock') {
                if (computerChoice === 'paper') {
                    return 'Computer wins';
                } else {
                    return 'User wins';
                }
            } else if (userChoice === 'paper') {
                if (computerChoice === 'scissors') {
                    return 'Computer wins';
                } else {
                    return 'User wins';
                }
            } else if (userChoice === 'scissors') {
                if (computerChoice === 'rock') {
                    return 'Computer wins';
                } else {
                    return 'User wins';
                }
            }
        }
    }
}