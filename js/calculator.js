"use Strict";

const getResult = () => {
  const exp = document.getElementById("exp").innerHTML;
  const output = document.getElementById("output-number");
  try {
    if (!exp) {
      output.innerHTML = "";
    } else {
      output.innerHTML = eval(exp);
    }
  } catch (e) {
    if (e instanceof SyntaxError) {
      output.innerHTML = "Invalid Input!";
    }
  }
};

const clearDisplay = () => {
  document.getElementById("exp").innerHTML = "";
  document.getElementById("output-number").innerHTML = "";
};

const buttons = document.querySelectorAll(".button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    document.getElementById("exp").innerHTML += button.value;
  });
});

document.getElementById("button-c").addEventListener("click", clearDisplay);
document.getElementById("button-e").addEventListener("click", getResult);