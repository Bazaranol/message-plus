import React, { useState } from "react";
import "./input.css";
interface IInput {
  placeholder: string;
}

export const Input: React.FC<IInput> = ({ placeholder }) => {
  return (
    <form>
      <input type="text" placeholder={placeholder} className={"inputLogin"} />
    </form>
  );
};
