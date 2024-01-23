// Please don't change the pre-written code.

const express = require("express");
const app = express();

// const logRequest = () => {
//   // Write your code here
//   console.log("GET");
//   console.log("/");
// };

// logRequest();

// app.get("/", (req, res) => {
//   res.send("Coding Ninjas!");
// });


const logRequest = (req, res, next) => {
  // Write your code here
  console.log("GET");
  console.log("/");
  next();
};

//logRequest();

app.get("/", logRequest, (req, res) => {
  res.send("Coding Ninjas!");
});

module.exports = app;
