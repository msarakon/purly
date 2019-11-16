import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBed,
  faHandsHelping,
  faFileAlt
} from "@fortawesome/free-solid-svg-icons";

const Burger = ({ setView }) => (
  <Menu left width={"20%"}>
    <div id="today" className="menu-item" onClick={() => setView(null)}>
      <FontAwesomeIcon icon={faHome} /> Home
    </div>
    <div id="sleep" className="menu-item" href="#">
      <FontAwesomeIcon icon={faBed} /> Sleep
    </div>
    <div
      id="activity"
      className="menu-item"
      onClick={() => setView("fairdata")}
    >
      <FontAwesomeIcon icon={faFileAlt} /> Fair Data
    </div>
    <div id="activity" className="menu-item" onClick={() => setView("help")}>
      <FontAwesomeIcon icon={faHandsHelping} /> Help
    </div>
  </Menu>
);

export default Burger;
