import React from "react";
import { Button } from "../components/atoms/button/Button";
import { Input } from "../components/atoms/input/Input";
import { LoginInput } from "../components/molecules/loginInput/LoginInput";
import { PasswordInput } from "../components/molecules/paswordInput/PasswordInput";

export const MessengerPage: React.FC = () => {
  return (
    <div>
      <Button text={"What"} base={"white"} />
      <Button text={"Blue"} base={"blue"} />
      <LoginInput text={"User name"} placeholder={"Write username"} />
      <PasswordInput text={"Password"} placeholder={"Write password"} />
    </div>
  );
};
