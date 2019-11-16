import React from "react";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  if (loading) {
    return <Loader />;
  } else {
    return <div className="app">blööblää</div>;
  }
};

export default App;
