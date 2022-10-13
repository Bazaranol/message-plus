import React from "react";
import { Input } from "../../atoms/input/Input";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import "./passwordInput.css";
interface IPasswordInput {
  text: string;
  placeholder: string;
}

export const PasswordInput: React.FC<IPasswordInput> = ({
  text,
  placeholder,
}) => {
  return (
    <div className="passwordInputBlock">
      <TextLabel text={text} />
      <Input placeholder={placeholder} />
    </div>
  );
};
