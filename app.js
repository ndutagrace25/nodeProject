// Node.js ===> Express Framework (SIMPLE SERVER)
const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");

// Database
const db = require('./config/database');

// test db connection
db.authenticate()
  .then(() => console.log("Database connected.."))
  .catch(err => console.log(err));

let app = express();

app.get("/", (req, res) => res.send("INDEX"));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}))

// Gig Routes
app.use('/bills', require('./routes/bills'));

// Port to listen on
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
