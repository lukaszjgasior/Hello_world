import React from "react";

export function RaceDay() {
  // app assigning race numbers and start times depending on participant age and time of registration
  let raceNumber = Math.floor(Math.random() * 1000);
  let registeredEarly = false;
  let runnerAge = 36;
  let startTime = "";
  if (runnerAge > 18 && registeredEarly) {
    raceNumber += 1000;
    startTime = "9:30 am";
  } else if (runnerAge > 18 && !registeredEarly) {
    startTime = "11:00 am";
  } else if (runnerAge < 18) {
    startTime = "12:30 pm";
  } else {
    startTime = "please see registation desk";
  }
  return (
    <p>
      Thank you for registering. Your race number is {raceNumber}. Your start
      time: {startTime}.
    </p>
  );
}
