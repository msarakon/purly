import React from 'react';
import './Burger.css';
import { slide as Menu } from 'react-burger-menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBed} from '@fortawesome/free-solid-svg-icons'
 
class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu left width={'20%'}>

    <a id="today" className="menu-item" href="/"><FontAwesomeIcon icon={faHome} /></a>
        <a id="sleep" className="menu-item" href="/about"><FontAwesomeIcon icon={faBed} /></a>
        <a id="tips" className="menu-item" href="/contact">Tips</a>
        <a id="activity" className="menu-item" href="/activity"><FontAwesomeIcon icon={faBed} /></a>
        <a id="contact" className="menu-item" href="/activity">Contact</a>
      </Menu>
    );
  }
}

export default Burger