import React from "react";
import ReactDom from "react-dom";
import Calculator from "./components/Calculator";

const App = () => {
  return <Calculator />;
};

ReactDom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);