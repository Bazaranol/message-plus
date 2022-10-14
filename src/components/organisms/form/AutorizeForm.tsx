import React from "react";
import { LoginInput } from "../../molecules/loginInput/LoginInput";
import { PasswordInput } from "../../molecules/paswordInput/PasswordInput";

export const AutorizeForm: React.FC = () => {
  return (
    <form>
      <LoginInput text={"Login"} placeholder={"Input login"} />
      <PasswordInput text={"Password"} placeholder={"Input password"} />
    </form>
  );
};
