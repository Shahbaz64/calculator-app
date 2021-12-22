import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { onClickHandler } from "components/actions/actions";

const Button = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        className={props.className}
        onClick={() => dispatch(onClickHandler(props.value))}
      >
        {props.value}
      </button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Button.defaultProps = {
  className: "btn",
  value: "",
};

export default Button;
