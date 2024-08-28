const express = require("express"); // import express
const app = express(); // create instance of express

const PORT = 4000;
const HOSTNAME = "localhost";

app.get("/", (req, res) => {
  res.send("Welcome to NodeJS Server");
}); // create a route with response

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${HOSTNAME}:${PORT}`);
}); // starts the server and listen for incoming request
