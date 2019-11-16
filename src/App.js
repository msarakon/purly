import React from "react";
import Loader from "./components/Loader";
import Button from "./components/Button";
import Burger from "./Burger";
import "./App.css";

const App = () => {
  const [loading, setLoading] = React.useState(true);
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
            <Button content={"🌳"} />
          </div>
        </div>
      </div>
    );
  }
};

export default App;
