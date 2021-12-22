import React from "react";
import Button from "components/calculator/button";
import "components/calculator/calculator.css";
import { v4 as uuid } from "uuid";

const CalculatorButtons = () => {
  const myButtons = [
    { value: "1", className: "btn" },
    { value: "2", className: "btn" },
    { value: "3", className: "btn" },
    { value: "+", className: "btn yellow-btn" },
    { value: "4", className: "btn" },
    { value: "5", className: "btn" },
    { value: "6", className: "btn" },
    { value: "-", className: "btn yellow-btn" },
    { value: "7", className: "btn" },
    { value: "8", className: "btn" },
    { value: "9", className: "btn" },
    { value: "*", className: "btn yellow-btn" },
    { value: "C", className: "btn red-btn" },
    { value: "0", className: "btn" },
    { value: "=", className: "btn" },
    { value: "/", className: "btn yellow-btn" },
  ];

  return (
    <div className="calculator-btns">
      {myButtons.map((btn) => (
        <Button key={uuid()} className={btn.className} value={btn.value} />
      ))}
    </div>
  );
};

export default CalculatorButtons;
