import React from "react";

export function Temperature() {
  // set a new constant
  const kelvin = 293;
  // converting kelving to new variable: celsius
  let celsius = kelvin - 273;
  // converting celsius to new variable: fahrenheit
  let fahrenheit = celsius * (9 / 5) + 32;
  // the above calculation will produce fractions so rounding down
  fahrenheit = Math.round(fahrenheit);

  return (
    <p>
      <b>
        <i>
          The temp is {kelvin} K, which converts to {celsius} C and {fahrenheit}
          F.
        </i>
      </b>
    </p>
  );
}
