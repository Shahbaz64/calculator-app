"use Strict";

// sets an Expression when user preesses buttons
function setExpression(id) {
  let text = document.getElementById("exp");
  const val = document.getElementById(id).value;
  text.innerHTML += val;
}

// gets expression and generate result of that expression
function getResult() {
  const exp = document.getElementById("exp").innerHTML;
  try {
    const result = eval(exp);
    document.getElementById("output-number").innerHTML = result;
  } catch (e) {
    if (e instanceof SyntaxError) {
      document.getElementById("output-number").innerHTML = "Invalid Input!";
    }
  }
}

// clear both the input and output areas
function clearDisplay() {
  document.getElementById("exp").innerHTML = "";
  document.getElementById("output-number").innerHTML = "";
}
