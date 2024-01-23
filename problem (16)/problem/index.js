// Please don't change the pre-written code

const express = require("express");
const server = express();

const renderStatic = (server, dir) => {
  // Write your code here
  server.use(express.static(dir));
};

server.get("/", (req, res) => {
  res.send("get method called!");
});

renderStatic(server, "public");

module.exports = { renderStatic, server };
