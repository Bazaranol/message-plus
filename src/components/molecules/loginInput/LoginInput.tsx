import React from "react";
import { Input } from "../../atoms/input/Input";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import "./loginInput.css";

interface ILoginInput {
  text: string;
  placeholder: string;
}

export const LoginInput: React.FC<ILoginInput> = ({ text, placeholder }) => {
  return (
    <div className="loginInputBlock">
      <TextLabel text={text} />
      <Input placeholder={placeholder} />
    </div>
  );
};
