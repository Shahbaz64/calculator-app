const initialState = {
  exp: "",
  result: "",
  recents: [],
};

const MyReducer = (state = initialState, action) => {
  const value = action.payload;
  if (action.type == "CLICKBUTTON") {
    if (value === "C") {
      state = {
        ...state,
        exp: "",
        result: "",
      };
    } else if (value === "=") {
      try {
        if (state.exp === "") {
          state = {
            ...state,
            result: "",
          };
        } else {
          state = {
            ...state,
            result: eval(state.exp),
          };
          state = {
            ...state,
            recents: [
              ...state.recents,
              { expression: state.exp, result: state.result },
            ],
          };
        }
      } catch (e) {
        if (e instanceof SyntaxError) {
          state = {
            ...state,
            exp: "",
            result: "Invalid",
          };
        }
      }
    } else {
      if (state.result === "") {
        state = {
          ...state,
          exp: state.exp + value,
        };
      } else {
        if ((value >= 0 && value <= 9) || state.result === "Invalid") {
          state = {
            ...state,
            exp: value,
            result: "",
          };
        } else {
          state = {
            ...state,
            exp: state.result + value,
            result: "",
          };
        }
      }
    }
  }
  if (action.type === "CLEARBUTTON") {
    state = {
      ...state,
      recents: [],
    };
  }
  return state;
};

export default MyReducer;
