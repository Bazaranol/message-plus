import React, { useState } from "react";
import "./button.css";
interface IButton {
  text: string;
  base: string;
}
// interface IBase {
//   white?: string;
//   blue?: string;
// }

export const Button: React.FC<IButton> = ({ text, base }) => {
  const [disable, setDisable] = useState<boolean>(false);
  return (
    <button
      onClick={() => setDisable((state) => !state)}
      className={base === "white" ? "btn btn-white" : "btn btn-blue"}
      type="button"
      disabled={disable}
    >
      {text}
    </button>
  );
};
