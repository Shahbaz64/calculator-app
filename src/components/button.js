import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={this.props.className}
          onClick={() => this.props.onClick(this.props.value)}
        >
          {this.props.value}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: "btn",
  value: "",
  onClick: () => {},
};

export default Button;
