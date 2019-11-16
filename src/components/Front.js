import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSmile,
  faBed,
  faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import "./Front.css";

<<<<<<< HEAD
const Front = ({ setView }) => (
  <div className="view-container">
    <div className="header"></div>
    <div className="buttons">
      <div className="buttons-top">
        <Button content={<FontAwesomeIcon icon={faSmile} />} 
          onSelect={() => setView("fairdata")}/> 
=======
const Front = ({ setView }) => {
  const [box, setBox] = React.useState({
    question: "How much should you sleep in a night? 😴",
    options: ["12+ hours", "8-10 hours", "6-7 hours"]
  });
  const answer = index => {
    animate({
      question: `${(() => {
        switch (index) {
          case 0:
            return "That's quite a lot!";
          case 1:
            return "Yes, that works for most people!";
          case 2:
            return "That might not be enough for everyone.";
          default:
            return "Thanks for the answer!";
        }
      })()}
      Check out some more quizes if you have time.`
    });
  };
  const animate = box => {
    setBox(null);
    setTimeout(() => setBox(box), 0);
  };
  return (
    <div className="view-container">
      <div className="header">
        <div className="header-content">
          <div className="header-bg-left">
            <span role="img" aria-label="cloudies">
              ☁️ ☁️
            </span>
          </div>
          <div className="header-bg-right">
            <span role="img" aria-label="cloudies">
              ☁️ ☁️
            </span>
          </div>
          <div className="header-title">Hello! Today's theme is</div>
          <div className="header-theme">Sleep</div>
          {box && (
            <div className="box">
              <div className="close" onClick={() => setBox(null)}>
                x
              </div>
              <div className="box-question">{box.question}</div>
              <div className="box-options">
                {box.options &&
                  box.options.map((option, index) => (
                    <div className="clickable" onClick={() => answer(index)}>
                      {option}
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
>>>>>>> 467b3c28c3975c54702c281c4a594ec47593cd81
      </div>
      <div className="buttons">
        <div className="buttons-top">
          <Button
            content={<FontAwesomeIcon icon={faSmile} />}
            onSelect={() => setView("mood")}
          />
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
};

export default Front;
