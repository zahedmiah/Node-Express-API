const express = require("express");
const app = express();
const people = require('./methods-public/routes/people')
const auth = require('./methods-public/routes/auth')


//static assets
app.use(express.static("./methods-public"));
//parse form data

app.use(express.urlencoded({ extended: false }));
app.use('api/people', people)
app.use("login", auth);
app.listen(5000, () => {
  console.log("server is listening on port 5000");
});

//post request would require postman, cannot be done using browser
