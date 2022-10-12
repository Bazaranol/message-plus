import React, { useState } from "react";

interface IButton {
  text: string;
}

export const Button: React.FC<IButton> = ({ text }) => {
  const [colorButton, setColorButton] = useState("red");
  return (
    <button
      style={{ color: colorButton }}
      onClick={() => {
        colorButton === "red" ? setColorButton("blue") : setColorButton("red");
      }}
    >
      {text}
    </button>
  );
};
