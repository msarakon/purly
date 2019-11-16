import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBed,
  faHandsHelping,
  faFileAlt,
  faFlagCheckered,
  faSmile,
  faQuestion,
  faAward,
  faSchool
} from "@fortawesome/free-solid-svg-icons";

const Burger = ({ setView }) => (
  <Menu left width={"20%"}>
    <div className="menu-item" onClick={() => setView(null)}>
      <FontAwesomeIcon icon={faHome} /> Home
    </div>
    <div className="menu-item" onClick={() => setView("mood")}>
      <FontAwesomeIcon icon={faSmile} /> Mood
    </div>
    <div className="menu-item">
      <FontAwesomeIcon icon={faBed} /> Sleep
    </div>
    <div className="menu-item">
      <FontAwesomeIcon icon={faSchool} /> School
    </div>
    <div className="menu-item">
      <FontAwesomeIcon icon={faQuestion} /> Quizes
    </div>
    <div className="menu-item">
      <FontAwesomeIcon icon={faFlagCheckered} /> Tasks
    </div>
    <div className="menu-item">
      <FontAwesomeIcon icon={faAward} /> Bonuses
    </div>
    <div className="menu-item" onClick={() => setView("fairdata")}>
      <FontAwesomeIcon icon={faFileAlt} /> Fair Data
    </div>
    <div className="menu-item" onClick={() => setView("help")}>
      <FontAwesomeIcon icon={faHandsHelping} /> Help
    </div>
  </Menu>
);

export default Burger;
