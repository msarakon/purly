import React from "react";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Burger from "./components/Burger";
import Help from "./components/Help";
import View from "./components/View";
import "./App.css";

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
        <Burger></Burger>
        <div className="header"></div>
        <div className="buttons">
          <div className="buttons-top">
            <Button content={"😊"} />
          </div>
          <div className="buttons-bottom">
            <Button content={"☁️"} />
            <Button content={"🌳"} onSelect={() => setView("help")} />
          </div>
        </div>
        {view && (
          <View
            content={(() => {
              // eslint-disable-next-line
              switch (view) {
                case "help":
                  return <Help />;
              }
            })()}
          />
        )}
      </div>
    );
  }
};

export default App;
