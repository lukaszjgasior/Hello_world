import React from "react";

export function SleepDebt() {
  const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 1;
      case "tuesday":
        return 2;
      case "wednesday":
        return 3;
      case "thursday":
        return 4;
      case "friday":
        return 5;
      case "saturday":
        return 6;
      case "sunday":
        return 7;
      default:
        break;
    }
  };
  const getActualSleepHours = () =>
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednsday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

  const getIdealSleepHours = () => {
    let idealHours = 9;
    return idealHours * 7;
  };
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "You got" +
          (actualSleepHours - idealSleepHours) +
          " more than you need."
      );
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        "You need " + (idealSleepHours - actualSleepHours) + " more."
      );
    }
  };
}
