import React from "react";
import "./Button.css";

const Button = ({ size, content }) => {
  return (
    <div className="button" style={{ width: size, height: size }}>
      {content}
    </div>
  );
};

export default Button;
