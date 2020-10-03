import React from "react";

export function MyAge() {
  // set constant for user age
  const myAge = 36;
  // the first two years count differently - set separate variable and multiply appropriately
  let earlyYears = 2;
  earlyYears *= 10.5;
  // every remaining year counts as 4 years - set var for remaining years and multiply
  let laterYears = myAge - 2;
  laterYears *= 4;
  // add the two age calculation vars to get total dog years
  let myAgeInDogYears = earlyYears + laterYears;
  let myName = "Lukasz";
  return (
    <p>
      My name is {myName}. I am {myAge} old in human years, which is{" "}
      {myAgeInDogYears} in dog years.
    </p>
  );
}
