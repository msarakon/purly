import React from "react";
import Button from "./Button";
import "./Front.css";

const Front = ({ setView }) => (
  <div className="view-container">
    <div className="header"></div>
    <div className="buttons">
      <div className="buttons-top">
        <Button content={"😊"} />
      </div>
      <div className="buttons-bottom">
        <Button content={"☁️"} />
        <Button content={"🌳"} onSelect={() => setView("help")} />
      </div>
    </div>
  </div>
);

export default Front;
