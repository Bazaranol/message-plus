import React from "react";
import { TextLabel } from "../../atoms/labels/textLabel/TextLabel";
import { WelcomeLabel } from "../../atoms/labels/welcomeLabel/WelcomeLabel";
import { MainLogo } from "../../atoms/logos/mainLogo/MainLogo";
import "./loginTitle.css";
export const LoginTitle = () => {
  return (
    <div className="title-block">
      <MainLogo />
      <WelcomeLabel text={"Welcome to"} name={"Chasity"} mark={"!"} />
      <TextLabel text={"Please autorize yourself"} size={27} />
    </div>
  );
};
