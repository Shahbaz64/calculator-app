import React from "react";
import "components/calculator/calculator.css";
import NavBar from "../home/navBar";
import Buttons from "components/calculator/calculatorButtons";
import { useSelector } from "react-redux";

/* eslint-disable no-eval */

const Calculator = () => {
  const { exp, result } = useSelector((state) => state.MyReducer);

  return (
    <div>
      <NavBar />
      <div className="heading">
        <h2>Calculator App</h2>
      </div>
      <div className="calculator-box">
        <div className="in-out-box">
          <p className="exp">{exp}</p>
          <p className="out">{result}</p>
        </div>
        <Buttons />
      </div>
    </div>
  );
};

export default Calculator;
