import React from "react";

export function MagicEightBall() {
  let userName = "";
  userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
  let userQuestion = "Should I study coding?";
  console.log(`Your question is: ${userQuestion}`);
  let randomNumber = Math.floor(Math.random() * 8);
  let eightBall = "";
}
