import React from "react";

interface IInput {
  text?: string;
}

export const Input: React.FC<IInput> = ({ text }) => {
  return <div>Input</div>;
};
