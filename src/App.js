import React from "react";
import Loader from "./components/Loader";
import Front from "./components/Front";
import Burger from "./components/Burger";
import Help from "./components/Help";
import Fairdata from "./components/Fairdata";
import Mood from "./components/Mood";
import "./App.css";
import "./components/View.css";

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [view, setView] = React.useState(null);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="app">
        <Burger setView={setView} />
        <div className="logo logo-small" onClick={() => setView(null)}>
          Purly
        </div>
        {(() => {
          switch (view) {
            case "help":
              return <Help setView={setView} />;
            case "fairdata":
              return <Fairdata setView={setView} />;
            case "mood":
              return <Mood setView={setView} />;
            default:
              return <Front setView={setView} />;
          }
        })()}
      </div>
    );
  }
};

export default App;
