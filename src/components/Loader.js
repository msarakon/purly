import React from "react";
import "./Loader.css";

const Loader = () => {
  const [faded, setFaded] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => setFaded(true), 2500);
  }, []);
  return (
    <>
      <div className={`logo ${faded ? "faded" : ""}`}>Purly</div>
      <div className={`loader ${faded ? "faded" : ""}`} />
    </>
  );
};

export default Loader;
