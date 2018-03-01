// Include Server Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const React = require('react');

// Require Schema
// const schema = require('schema');

///////////////// Initialize Express /////////////////
const app = express();
const router = express.Router();

// Pass router into routes file
require("./routes/api-routes")(router);

// Sets PORT to process.env.PORT for Heroku || 3000 for localhost
const PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Declares Express static folder
app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, 'public')));

// Use Router
app.use(router);

// -------------------------------------------------

// MongoDB Configuration configuration
// if (PORT === 3000) {
//   mongoose.connect("mongodb://localhost/**INSERT_DB_HERE**", {
//     useMongoClient: true
//   });
// } else {
//   mongoose.connect("", {
//     useMongoClient:true
//   });
// };
// var db = mongoose.connection;

// db.on("error", function(err) {
//   console.log("Mongoose Error: ", err);
// });

// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
