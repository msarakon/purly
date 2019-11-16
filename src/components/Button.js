import React from "react";
import "./Button.css";

const Button = ({ content, onSelect }) => (
  <div className="button" onClick={onSelect}>
    {content}
  </div>
);

export default Button;
