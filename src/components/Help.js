import React from "react";
import helpPath from "../data/helpPath";

const HelpChat = () => {
  const [index, setIndex] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const { title, choices } = resolveChoices(index);
  const reanimate = () => {
    setShow(false);
    setTimeout(() => setShow(true), 0);
  };
  const choose = idx => {
    setIndex([...index, idx]);
    reanimate();
  };
  const goBack = () => {
    index.splice(-1, 1);
    setIndex(index);
    reanimate();
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
            {index.length ? (
              <div className="box small" onClick={goBack}>
                <span role="img" aria-label="back arrow">
                  ⬅️
                </span>{" "}
                Go back
              </div>
            ) : (
              ""
            )}
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
