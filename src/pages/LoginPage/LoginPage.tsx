import React from "react";
import { Button } from "../../components/atoms/button/Button";
import { LoginTitle } from "../../components/molecules/loginTitle/LoginTitle";
import { AutorizeForm } from "../../components/organisms/form/AutorizeForm";
import "./loginPage.css";
export const LoginPage: React.FC = () => {
  return (
    <>
      <div className="login-page">
        <div className="left-block">
          <div>
            <LoginTitle />
            <AutorizeForm />
            <Button text={"Log In"} base={"blue"} />
            <Button text={"Registration"} base={"white"} />
          </div>
        </div>
        <div className="right-block">
          <div className="login-background"></div>
        </div>
      </div>
      <div className="login-page--mobile">
        <div className="top-block">
          <LoginTitle />
        </div>
        <div className="bottom-block">
          <AutorizeForm />
        </div>
      </div>
    </>
  );
};
