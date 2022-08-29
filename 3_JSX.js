// Old Way
var React = require("react");
var ReactDOM = require("react-dom");
ReactDOM.render(WHAT TO SHOW , WHERE TO SHOW IT, WHEN TO SHOW IT);

/*Bable Compiler :Babel is a free and open-source JavaScript transcompiler that is mainly used to 
                  convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can 
                  be run by older JavaScript engines. Babel is a popular tool for using the newest features of the JavaScript programming language */

//New Way
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(                  //TAKE ONLY SINGLE JSX/HTML ELEMENT
  <h1>Hello React</h1>,
  document.getElementById("root")
);
