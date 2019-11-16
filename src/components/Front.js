import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faBed,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import "./Front.css";

const Front = ({ setView }) => (
  <div className="view-container">
    <div className="header"></div>
    <div className="buttons">
      <div className="buttons-top">
        <Button content={<FontAwesomeIcon icon={faSmile} />} />
      </div>
      <div className="buttons-bottom">
        <Button content={<FontAwesomeIcon icon={faBed} />} />
        <Button
          content={<FontAwesomeIcon icon={faHandsHelping} />}
          onSelect={() => setView("help")}
        />
      </div>
    </div>
  </div>
);

export default Front;
