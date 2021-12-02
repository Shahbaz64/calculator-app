import React, { Component } from "react";
import "../Styles/calculator.css";

class Buttons extends Component {
  allButtons = [
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

  render() {
    return (
      <div className="calculator-btns">
        {this.allButtons.map((btn, i) => (
          <button
            key={i}
            className={btn.className}
            onClick={() => this.props.onClickHandler(btn.value)}
          >
            {btn.value}
          </button>
        ))}
      </div>
    );
  }
}

export default Buttons;
