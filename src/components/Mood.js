import React from "react";

const Mood = ({ setView }) => {
  const [selected, setSelected] = React.useState({ moods: [], stuffs: [] });
  const moods = ["😃", "😊", "😰", "😭", "😡", "💜", "💩", "🍆"];
  const stuffs = ["📚", "🏈", "🌳", "🧑‍🤝‍🧑", "💻", "🎮", "🐶", "🎬"];
  const select = (category, list, idx) => {
    const doSelect = !selected[category].includes(idx);
    setSelected({
      ...selected,
      [category]: doSelect
        ? [...selected[category], idx]
        : selected[category].filter(i => i !== idx)
    });
    console.log(selected);
  };
  return (
    <div className="view-container">
      <div className="view-content">
        <div className="view-title">How are you feeling?</div>
        <div className="box">
          <div className="box-options">
            {moods.map((mood, idx) => (
              <div
                className={`clickable ${
                  selected.moods.includes(idx) ? "selected" : ""
                }`}
                onClick={() => select("moods", moods, idx)}
              >
                {mood}
              </div>
            ))}
          </div>
        </div>
        <div className="view-title">What is your plan today?</div>
        <div className="box">
          <div className="box-options">
            {stuffs.map((stuff, idx) => (
              <div
                className={`clickable ${
                  selected.stuffs.includes(idx) ? "selected" : ""
                }`}
                onClick={() => select("stuffs", stuffs, idx)}
              >
                {stuff}
              </div>
            ))}
          </div>
        </div>
        <div className="box clickable" onClick={() => setView(null)}>
          <span role="img" aria-label="back arrow">
            ⬅️
          </span>{" "}
          Go back
        </div>
      </div>
    </div>
  );
};

export default Mood;
