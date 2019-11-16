import React from "react";

const HelpChat = () => {
  const options = ["Asddfdf", "öfgdögfglfg", "fkdfjsisfjdifsdhf", "halp"];

  return (
    <div className="view-container">
      <div className="view-content">
        <div className="view-title">What help do you need?</div>
        {options.map(option => (
          <div className="box">{option}</div>
        ))}
      </div>
    </div>
  );
};

export default HelpChat;
