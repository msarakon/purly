import React from "react";
import Loader from "./components/Loader";
import Front from "./components/Front";
import Burger from "./components/Burger";
import Help from "./components/Help";
<<<<<<< HEAD
import Fairdata from "./components/Fairdata";
=======
import Mood from "./components/Mood";
>>>>>>> 467b3c28c3975c54702c281c4a594ec47593cd81
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
<<<<<<< HEAD
            case "fairdata":
              return <Fairdata setView={setView} />;
=======
            case "mood":
              return <Mood setView={setView} />;
>>>>>>> 467b3c28c3975c54702c281c4a594ec47593cd81
            default:
              return <Front setView={setView} />;
          }
        })()}
      </div>
    );
  }
};

export default App;
