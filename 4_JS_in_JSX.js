import React from "react";
import ReactDOM from "react-dom";

var name = "Himanshu";
const luckyNumber = 8;

ReactDOM.render(
  <>
    <h1>Hello {name}!</h1>    //Using parenthesis You can use javaScript in JSX
    <p>Your lucky Number is {luckyNumber}.</p>
    <p>Random Number : {Math.random()}</p>
  </>,
  document.getElementById("root")
);
