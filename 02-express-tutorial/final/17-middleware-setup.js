const express = require("express");
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

// req => middleware => res
// must invoke next()

// app.use([authorize, logger]) ?user=john

// 1. use vs route
// 2. option - our own / express / third party


app.use('/api', logger)
// any route starting with '/api' will use the logger middleware

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("Items");
});

app.listen(5000, () => {
  console.log("Server is listening on post 5000....");
});
