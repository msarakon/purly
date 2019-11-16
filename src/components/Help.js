import React from "react";
import helpPath from "../data/helpPath";

const HelpChat = () => {
  const [index, setIndex] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const { title, choices } = resolveChoices(index);
  const choose = idx => {
    setShow(false);
    setIndex([...index, idx]);
    setTimeout(() => setShow(true), 0);
  };
  return (
    <>
      {show && (
        <div className="view-container">
          <div className="view-content">
            <div className="view-title">{title}</div>
            {choices &&
              choices.map((choice, choiceIndex) => (
                <div
                  className="box"
                  onClick={
                    choice.choices ? () => choose(choiceIndex) : undefined
                  }
                >
                  {choice.text}
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  );
};

const resolveChoices = index => {
  if (index.length) {
    return index.reduce(
      (choice, idx) =>
        Array.isArray(choice) ? choice[idx] : choice.choices[idx],
      helpPath
    );
  } else {
    return { title: "What help do you need?", choices: helpPath };
  }
};

export default HelpChat;
