import React from "react";
import "./Burger.css";
import { slide as Menu } from "react-burger-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBed,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";

<<<<<<< HEAD
class Burger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu left width={"20%"}>
        <a id="today" className="menu-item" href="/">
          <FontAwesomeIcon icon={faHome} />
        </a>
        <a id="sleep" className="menu-item" href="/about">
          <FontAwesomeIcon icon={faBed} />
        </a>
        <a id="tips" className="menu-item" href="/contact">
          Tips
        </a>
        <a id="activity" className="menu-item" href="/fairdata">
          Data
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
    );
  }
}
=======
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
      href="#"
      onClick={() => setView("help")}
    >
      <FontAwesomeIcon icon={faHandsHelping} /> Help
    </div>
  </Menu>
);
>>>>>>> 467b3c28c3975c54702c281c4a594ec47593cd81

export default Burger;
