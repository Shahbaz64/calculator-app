import React, { Component } from "react";
import Button from "components/button";
import "styles/calculator.css";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

class CalculatorllButtons extends Component {
  myButtons = [
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
        {this.myButtons.map((btn) => (
          <Button
            key={uuid()}
            className={btn.className}
            value={btn.value}
            onClick={this.props.onClickHandler}
          />
        ))}
      </div>
    );
  }
}

CalculatorllButtons.propTypes = {
  onClickHandler: PropTypes.func.isRequired,
};

CalculatorllButtons.defaultProps = {
  onClickHandler: () => {},
};

export default CalculatorllButtons;