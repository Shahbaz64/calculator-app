export const onClickHandler = (val) => {
  return {
    type: "CLICKBUTTON",
    payload: val,
  };
};

export const clearHistoryHandler = () => {
  return {
    type: "CLEARBUTTON",
  };
};
