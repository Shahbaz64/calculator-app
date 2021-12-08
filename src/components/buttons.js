import React, { Component } from "react";
import "styles/calculator.css";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

class Buttons extends Component {
  allButtons = [
    { id: uuid(), value: "1", className: "btn" },
    { id: uuid(), value: "2", className: "btn" },
    { id: uuid(), value: "3", className: "btn" },
    { id: uuid(), value: "+", className: "btn yellow-btn" },
    { id: uuid(), value: "4", className: "btn" },
    { id: uuid(), value: "5", className: "btn" },
    { id: uuid(), value: "6", className: "btn" },
    { id: uuid(), value: "-", className: "btn yellow-btn" },
    { id: uuid(), value: "7", className: "btn" },
    { id: uuid(), value: "8", className: "btn" },
    { id: uuid(), value: "9", className: "btn" },
    { id: uuid(), value: "*", className: "btn yellow-btn" },
    { id: uuid(), value: "C", className: "btn red-btn" },
    { id: uuid(), value: "0", className: "btn" },
    { id: uuid(), value: "=", className: "btn" },
    { id: uuid(), value: "/", className: "btn yellow-btn" },
  ];

  render() {
    return (
      <div className="calculator-btns">
        {this.allButtons.map((btn) => (
          <button
            key={btn.id}
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

Buttons.propTypes = {
  onClickHandler: PropTypes.func,
};

Buttons.defaultProps = {
  onClickHandler: () => {},
};

export default Buttons;
