import React, { Component } from "react";
import Buttons from "components/calculatorButtons";
import "styles/calculator.css";

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
        res: "",
      });
    } else if (val === "=") {
      try {
        if (!this.state.exp) {
          this.setState({
            res: "",
          });
        } else {
          this.setState({
            res: eval(this.state.exp),
          });
        }
      } catch (e) {
        if (e instanceof SyntaxError) {
          this.setState({
            res: "Invalid",
          });
        }
      }
    } else {
      if (!this.state.res) {
        this.setState({
          exp: this.state.exp + val,
        });
      } else {
        if (val >= 0 && val <= 9) {
          this.setState({
            exp: val,
            res: "",
          });
        } else {
          if (this.state.res == "Invalid") {
            this.setState({
              exp: "",
            });
          } else {
            this.setState({
              exp: this.state.res + val,
              res: "",
            });
          }
        }
      }
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
