import React from "react";
import "./welcomeLabel.css";

export interface IWelcomeLabel {
  text: string;
  name: string;
  mark: string;
}

export const WelcomeLabel: React.FC<IWelcomeLabel> = ({ text, name, mark }) => {
  return (
    <div>
      <h6 className="wellcome-label">
        {text}
        <label className="name-label">{name}</label>
        <label className="mark">{mark}</label>
      </h6>
    </div>
  );
};
