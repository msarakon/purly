import React from "react";
import "./Fairdata.css";
import fairDataPath from "../data/fairDataPath";

const Fairdata = ({ setView }) => {
  const [index, setIndex] = React.useState([]);
  const [show, setShow] = React.useState(true);
  const { title } = resolveChoices(index);

  const reanimate = () => {
    setShow(false);
    setTimeout(() => setShow(true), 0);
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
            <div className="box small">
              Your data is yours. In this app we are using data to calculate
              your wellbeing and monitoring changes in your behaviour. Your data
              is not shared with anyone without your permission. Here you can
              see what kind of data is collected and how it is used. You can
              give your permission to share your data - or not to.
            </div>

            <div className="box small">
              <b>Phone usage data</b> tracks when your screen is on and when it
              is not. Which apps you have used is NOT tracked.
              <br />
              Choose who can see your screen time data: School Health
              Professionals ☑️ My Parents ☑️ ️
            </div>
            <div className="box small">
              <b>Sleep data</b> tracks how long you have slept. One bad night
              isn't serious but if you constantly get too less sleep you might
              wanna talk to somebody.
              <br />
              Choose who can see your sleep data: School Health Professionals ☑️
              My Parents ☑️ ️
            </div>
            <div className="box small">
              <b>Scientific Research</b> is better with more data to research.
              Your data can help researches to find ways to help other teens
              faster. If your data is used in research it is not possible to
              identify you - data is anonymised before use.
              <br />
              Can your data be used in researches? Yes☑️ No ☐
            </div>
            <div
              className="box small"
              onClick={index.length ? goBack : () => setView(null)}
            >
              <span role="img" aria-label="back arrow">
                ⬅️
              </span>{" "}
              Go back
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const resolveChoices = index => {
  return {
    title: "Decide what is done with your data.",
    choices: fairDataPath
  };
};

export default Fairdata;
