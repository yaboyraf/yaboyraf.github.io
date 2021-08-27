"use strict";

console.log("@@ app.js is running");

// JSX means: Javascript XML
var template = React.createElement(
  "p",
  null,
  "change"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
