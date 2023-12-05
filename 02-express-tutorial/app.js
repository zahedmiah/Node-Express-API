const express = require("express");
const app = express();
const people = require('./methods-public/routes/people')

//static assets
app.use(express.static("./methods-public"));
//parse form data
app.use(express.urlencoded({ extended: false }));

app.use('api/people', people)

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

//post request would require postman, cannot be done using browser
