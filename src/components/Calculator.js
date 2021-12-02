import React, { Component } from "react";
import Buttons from "./ButtonPad";
import "../Styles/calculator.css";

/* eslint-disable no-eval */

class Calculator extends Component {
  state = {
    exp: "",
    res: "",
  };
  onClickHandler = (val) => {
    if (val === "C") {
      this.setState({
        exp: "",
        res: ""
      });
    } else if (val === "=") {
      try {
        if (!this.state.exp) {
          this.setState({
            res: "",
          });
        } else {
          // const result = eval(this.state.exp);
          this.setState({
            res: eval(this.state.exp),
          });
        }
      } catch (e) {
        if (e instanceof SyntaxError) {
          this.setState({
            res: "Invalid Input",
          });
        }
      }
    } else {
      this.setState({
        exp: this.state.exp + val,
      });
    }
  };

  render() {
    return (
      <div className="calculator-box">
        <div className="in-out-box">
          <p className="exp">{this.state.exp}</p>
          <p className="out">{this.state.res}</p>
        </div>
        <Buttons onClickHandler={this.onClickHandler} />
      </div>
    );
  }
}

export default Calculator;